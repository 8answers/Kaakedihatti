create table if not exists restaurant_tables (
  table_number integer primary key,
  label text not null default '',
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists dining_tables (
  id bigint generated always as identity primary key,
  table_number integer not null unique,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists menu_categories (
  id bigint generated always as identity primary key,
  name text not null unique,
  display_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists menu_items (
  id bigint generated always as identity primary key,
  category_id bigint not null references menu_categories(id) on delete cascade,
  name text not null,
  description text not null default '',
  price numeric(10,2) not null default 0,
  is_veg boolean not null default true,
  display_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (category_id, name)
);

create table if not exists orders (
  id bigint generated always as identity primary key,
  table_number integer not null references restaurant_tables(table_number) on update cascade,
  table_id bigint not null references dining_tables(id) on update cascade,
  status text not null default 'open' check (status in ('open', 'shared', 'closed', 'cancelled')),
  shared_at timestamptz,
  opened_at timestamptz not null default now(),
  closed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (table_number)
);

create table if not exists order_items (
  id bigint generated always as identity primary key,
  order_id bigint not null references orders(id) on delete cascade,
  menu_item_id bigint references menu_items(id) on delete set null,
  category_name text not null,
  dish_name text not null,
  unit_price numeric(10,2) not null default 0,
  quantity integer not null check (quantity > 0),
  note text not null default '',
  acceptance_status text not null default 'pending' check (
    acceptance_status in ('pending', 'out', 'rejected', 'delivered')
  ),
  shared_at timestamptz,
  received_at timestamptz not null default now(),
  accepted_at timestamptz,
  out_at timestamptz,
  rejected_at timestamptz,
  delivered_at timestamptz,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table orders add column if not exists shared_at timestamptz;
alter table orders add column if not exists table_number integer;
alter table orders add column if not exists table_id bigint;
alter table orders add column if not exists status text not null default 'open';
alter table orders add column if not exists opened_at timestamptz;
alter table orders add column if not exists closed_at timestamptz;
alter table orders add column if not exists created_at timestamptz;
alter table orders add column if not exists updated_at timestamptz;

alter table restaurant_tables add column if not exists created_at timestamptz;
alter table restaurant_tables add column if not exists updated_at timestamptz;

alter table dining_tables add column if not exists created_at timestamptz;
alter table dining_tables add column if not exists updated_at timestamptz;

alter table menu_categories add column if not exists created_at timestamptz;
alter table menu_categories add column if not exists updated_at timestamptz;

alter table menu_items add column if not exists created_at timestamptz;
alter table menu_items add column if not exists updated_at timestamptz;

alter table order_items add column if not exists shared_at timestamptz;
alter table order_items add column if not exists acceptance_status text not null default 'pending';
alter table order_items add column if not exists received_at timestamptz;
alter table order_items add column if not exists accepted_at timestamptz;
alter table order_items add column if not exists out_at timestamptz;
alter table order_items add column if not exists rejected_at timestamptz;
alter table order_items add column if not exists delivered_at timestamptz;
alter table order_items add column if not exists created_at timestamptz;
alter table order_items add column if not exists updated_at timestamptz;

create index if not exists menu_items_category_id_idx on menu_items(category_id);
create index if not exists orders_table_number_idx on orders(table_number);
create index if not exists orders_table_id_idx on orders(table_id);
create index if not exists orders_status_idx on orders(status);
create index if not exists orders_shared_at_idx on orders(shared_at);
create index if not exists order_items_order_id_idx on order_items(order_id);
create index if not exists order_items_shared_at_idx on order_items(shared_at);
create index if not exists order_items_acceptance_status_idx on order_items(acceptance_status);
create index if not exists order_items_category_name_idx on order_items(category_name);

create or replace function set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_restaurant_tables_updated_at on restaurant_tables;
create trigger set_restaurant_tables_updated_at
before update on restaurant_tables
for each row execute function set_updated_at();

drop trigger if exists set_menu_categories_updated_at on menu_categories;
create trigger set_menu_categories_updated_at
before update on menu_categories
for each row execute function set_updated_at();

drop trigger if exists set_menu_items_updated_at on menu_items;
create trigger set_menu_items_updated_at
before update on menu_items
for each row execute function set_updated_at();

drop trigger if exists set_orders_updated_at on orders;
create trigger set_orders_updated_at
before update on orders
for each row execute function set_updated_at();

drop trigger if exists set_order_items_updated_at on order_items;
create trigger set_order_items_updated_at
before update on order_items
for each row execute function set_updated_at();

alter table restaurant_tables enable row level security;
alter table dining_tables enable row level security;
alter table menu_categories enable row level security;
alter table menu_items enable row level security;
alter table orders enable row level security;
alter table order_items enable row level security;

grant select on restaurant_tables to anon, authenticated;
grant select, insert, update, delete on dining_tables to anon, authenticated;
grant select on menu_categories to anon, authenticated;
grant select on menu_items to anon, authenticated;
grant select, insert, update, delete on orders to anon, authenticated;
grant select, insert, update, delete on order_items to anon, authenticated;
grant usage, select on all sequences in schema public to anon, authenticated;

drop policy if exists "read restaurant tables" on restaurant_tables;
create policy "read restaurant tables"
on restaurant_tables
for select
to anon, authenticated
using (true);

drop policy if exists "manage dining tables" on dining_tables;
create policy "manage dining tables"
on dining_tables
for all
to anon, authenticated
using (true)
with check (true);

drop policy if exists "read menu categories" on menu_categories;
create policy "read menu categories"
on menu_categories
for select
to anon, authenticated
using (true);

drop policy if exists "read menu items" on menu_items;
create policy "read menu items"
on menu_items
for select
to anon, authenticated
using (true);

drop policy if exists "manage orders" on orders;
create policy "manage orders"
on orders
for all
to anon, authenticated
using (true)
with check (true);

drop policy if exists "manage order items" on order_items;
create policy "manage order items"
on order_items
for all
to anon, authenticated
using (true)
with check (true);

insert into restaurant_tables (table_number, label)
select gs, 'Table ' || gs
from generate_series(1, 20) as gs
on conflict (table_number) do update
set label = excluded.label,
    is_active = true;

insert into dining_tables (table_number)
select gs
from generate_series(1, 20) as gs
on conflict (table_number) do update
set is_active = true;

insert into menu_categories (name, display_order)
values
  ('Soups', 1),
  ('Salads', 2),
  ('Starters', 3),
  ('Chaat', 4),
  ('Rolls', 5),
  ('Parathas', 6),
  ('Breads', 7),
  ('Main Course', 8),
  ('Dal Specials', 9),
  ('Paneer Specials', 10),
  ('Rice', 11),
  ('Biryani', 12),
  ('Chinese', 13),
  ('Pizza', 14),
  ('Pasta', 15),
  ('Burgers', 16),
  ('Sandwiches', 17),
  ('Snacks', 18),
  ('Thalis', 19),
  ('Combos', 20),
  ('Raita & Accompaniments', 21),
  ('Beverages', 22),
  ('Lassi & Chaas', 23),
  ('Mocktails', 24),
  ('Shakes', 25),
  ('Desserts', 26),
  ('Ice Creams', 27),
  ('Traditional Sweets', 28),
  ('Jain Food', 29),
  ('Signature Specials', 30),
  ('Family Packs', 31),
  ('Party Platters', 32)
on conflict (name) do update
set display_order = excluded.display_order,
    is_active = true;
