do $$
begin
  create type restaurant_role as enum (
    'admin',
    'captain',
    'cashier',
    'kitchen_supervisor',
    'sous_chef',
    'staff'
  );
exception
  when duplicate_object then null;
end $$;

alter type restaurant_role add value if not exists 'kitchen_supervisor';
alter type restaurant_role add value if not exists 'sous_chef';
alter type restaurant_role add value if not exists 'staff';
alter type restaurant_role add value if not exists 'cashier';

do $$
begin
  create type order_status as enum ('open', 'shared', 'payment_pending', 'closed', 'cancelled');
exception
  when duplicate_object then null;
end $$;

alter type order_status add value if not exists 'shared';
alter type order_status add value if not exists 'payment_pending';

do $$
begin
  create type order_item_status as enum ('pending', 'accepted', 'out', 'rejected', 'delivered');
exception
  when duplicate_object then null;
end $$;

alter type order_item_status add value if not exists 'accepted';
alter type order_item_status add value if not exists 'out';
alter type order_item_status add value if not exists 'rejected';
alter type order_item_status add value if not exists 'delivered';

do $$
begin
  create type attendance_status as enum ('present', 'absent');
exception
  when duplicate_object then null;
end $$;

create table if not exists users (
  id bigserial primary key,
  full_name text not null,
  role restaurant_role not null,
  username text not null unique,
  password text not null,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table users add column if not exists username text;
alter table users add column if not exists password text;
alter table users add column if not exists is_active boolean not null default true;
alter table users add column if not exists created_at timestamptz not null default now();
alter table users add column if not exists updated_at timestamptz not null default now();

create unique index if not exists users_username_key on users(username);
create index if not exists users_role_idx on users(role);
create index if not exists users_active_idx on users(is_active);

create table if not exists dining_tables (
  id bigserial primary key,
  table_number integer not null unique,
  display_name text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table dining_tables add column if not exists display_name text;
alter table dining_tables add column if not exists is_active boolean not null default true;
alter table dining_tables add column if not exists created_at timestamptz not null default now();
alter table dining_tables add column if not exists updated_at timestamptz not null default now();

create table if not exists menu_categories (
  id bigserial primary key,
  name text not null unique,
  display_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table menu_categories add column if not exists display_order integer not null default 0;
alter table menu_categories add column if not exists is_active boolean not null default true;
alter table menu_categories add column if not exists created_at timestamptz not null default now();
alter table menu_categories add column if not exists updated_at timestamptz not null default now();

create table if not exists menu_items (
  id bigserial primary key,
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

alter table menu_items add column if not exists description text not null default '';
alter table menu_items add column if not exists price numeric(10,2) not null default 0;
alter table menu_items add column if not exists is_veg boolean not null default true;
alter table menu_items add column if not exists display_order integer not null default 0;
alter table menu_items add column if not exists is_active boolean not null default true;
alter table menu_items add column if not exists created_at timestamptz not null default now();
alter table menu_items add column if not exists updated_at timestamptz not null default now();

create table if not exists orders (
  id bigserial primary key,
  table_id bigint references dining_tables(id),
  table_number integer not null,
  status order_status not null default 'open',
  opened_by_user_id bigint references users(id),
  shared_at timestamptz,
  opened_at timestamptz not null default now(),
  closed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table orders add column if not exists table_id bigint references dining_tables(id);
alter table orders add column if not exists table_number integer;
alter table orders add column if not exists status order_status not null default 'open';
alter table orders add column if not exists opened_by_user_id bigint references users(id);
alter table orders add column if not exists shared_at timestamptz;
alter table orders add column if not exists opened_at timestamptz not null default now();
alter table orders add column if not exists closed_at timestamptz;
alter table orders add column if not exists created_at timestamptz not null default now();
alter table orders add column if not exists updated_at timestamptz not null default now();

create unique index if not exists orders_table_number_open_key
on orders(table_number)
where status not in ('closed'::order_status, 'cancelled'::order_status);

create table if not exists order_items (
  id bigserial primary key,
  order_id bigint not null references orders(id) on delete cascade,
  menu_item_id bigint references menu_items(id) on delete set null,
  category_name text not null,
  dish_name text not null,
  unit_price numeric(10,2) not null default 0,
  quantity integer not null check (quantity > 0),
  note text not null default '',
  shared_at timestamptz,
  status order_item_status not null default 'pending',
  acceptance_status order_item_status not null default 'pending',
  received_at timestamptz not null default now(),
  accepted_at timestamptz,
  out_at timestamptz,
  rejected_at timestamptz,
  delivered_at timestamptz,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table order_items add column if not exists menu_item_id bigint references menu_items(id) on delete set null;
alter table order_items add column if not exists unit_price numeric(10,2) not null default 0;
alter table order_items add column if not exists note text not null default '';
alter table order_items add column if not exists shared_at timestamptz;
alter table order_items add column if not exists status order_item_status not null default 'pending';
alter table order_items add column if not exists acceptance_status order_item_status not null default 'pending';
alter table order_items add column if not exists received_at timestamptz not null default now();
alter table order_items add column if not exists accepted_at timestamptz;
alter table order_items add column if not exists out_at timestamptz;
alter table order_items add column if not exists rejected_at timestamptz;
alter table order_items add column if not exists delivered_at timestamptz;
alter table order_items add column if not exists sort_order integer not null default 0;
alter table order_items add column if not exists created_at timestamptz not null default now();
alter table order_items add column if not exists updated_at timestamptz not null default now();

create table if not exists attendance_records (
  id bigserial primary key,
  user_id bigint not null references users(id) on delete cascade,
  attendance_date date not null default current_date,
  status attendance_status,
  check_in_at timestamptz,
  check_out_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, attendance_date)
);

create index if not exists dining_tables_table_number_idx on dining_tables(table_number);
create index if not exists menu_items_category_id_idx on menu_items(category_id);
create index if not exists orders_table_id_idx on orders(table_id);
create index if not exists orders_table_number_idx on orders(table_number);
create index if not exists orders_status_idx on orders(status);
create index if not exists orders_shared_at_idx on orders(shared_at);
create index if not exists order_items_order_id_idx on order_items(order_id);
create index if not exists order_items_shared_at_idx on order_items(shared_at);
create index if not exists order_items_acceptance_status_idx on order_items(acceptance_status);
create index if not exists order_items_category_name_idx on order_items(category_name);
create index if not exists attendance_records_user_date_idx on attendance_records(user_id, attendance_date);

create or replace function set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_users_updated_at on users;
create trigger set_users_updated_at
before update on users
for each row execute function set_updated_at();

drop trigger if exists set_dining_tables_updated_at on dining_tables;
create trigger set_dining_tables_updated_at
before update on dining_tables
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

drop trigger if exists set_attendance_records_updated_at on attendance_records;
create trigger set_attendance_records_updated_at
before update on attendance_records
for each row execute function set_updated_at();

alter table users enable row level security;
alter table dining_tables enable row level security;
alter table menu_categories enable row level security;
alter table menu_items enable row level security;
alter table orders enable row level security;
alter table order_items enable row level security;
alter table attendance_records enable row level security;

grant select, insert, update, delete on users to anon, authenticated;
grant select on dining_tables to anon, authenticated;
grant select on menu_categories to anon, authenticated;
grant select on menu_items to anon, authenticated;
grant select, insert, update, delete on orders to anon, authenticated;
grant select, insert, update, delete on order_items to anon, authenticated;
grant select, insert, update, delete on attendance_records to anon, authenticated;
grant usage, select on all sequences in schema public to anon, authenticated;

drop policy if exists "manage users" on users;
create policy "manage users"
on users
for all
to anon, authenticated
using (true)
with check (true);

drop policy if exists "read dining tables" on dining_tables;
create policy "read dining tables"
on dining_tables
for select
to anon, authenticated
using (true);

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

drop policy if exists "manage attendance records" on attendance_records;
create policy "manage attendance records"
on attendance_records
for all
to anon, authenticated
using (true)
with check (true);

insert into dining_tables (table_number, display_name)
select gs, 'Table ' || gs
from generate_series(1, 20) as gs
on conflict (table_number) do update
set display_name = excluded.display_name,
    is_active = true;

insert into users (full_name, role, username, password, is_active)
values
  ('Admin', 'admin', 'admin', '12345', true),
  ('Abc XyZ', 'sous_chef', 'ab@kdh', '12345', true)
on conflict (username) do update
set full_name = excluded.full_name,
    role = excluded.role,
    password = excluded.password,
    is_active = true;

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
