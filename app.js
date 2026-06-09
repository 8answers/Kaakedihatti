const SUPABASE_URL = "https://cuedxdmxpmwfusvwrmno.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_9saxlX6ApHM1IfP0gLXaXw_cLUb9Y8t";
const SUPABASE_REST_URL = `${SUPABASE_URL}/rest/v1`;

const menuCategories = [
  category("Soups", [
    "Tomato Soup",
    "Sweet Corn Soup",
    "Veg Manchow Soup",
    "Hot & Sour Veg Soup",
    "Lemon Coriander Soup",
    "Veg Clear Soup",
    "Mixed Vegetable Soup",
    "Cream of Tomato Soup",
    "Mushroom Soup",
    "Broccoli Almond Soup",
  ]),
  category("Salads", [
    "Green Salad",
    "Russian Salad",
    "Caesar Salad",
    "Fruit Salad",
    "Greek Salad",
    "Sprout Salad",
    "Corn Salad",
    "Kachumber Salad",
    "Chickpea Salad",
  ]),
  category("Starters", [
    "Paneer Tikka",
    "Veg Spring Roll",
    "Crispy Corn",
    "Garlic Bread",
    "Cheese Corn Balls",
    "Hara Bhara Kabab",
    "Tandoori Mushroom",
    "Aloo 65",
    "Vegetable Lollipop",
    "Stuffed Paneer Seekh",
  ]),
  category("Chaat", [
    "Aloo Tikki Chaat",
    "Papdi Chaat",
    "Dahi Bhalla",
    "Pani Puri",
    "Samosa Chaat",
    "Ragda Pattice",
    "Bhel Puri",
    "Sev Puri",
    "Dahi Puri",
    "Aloo Chana Chaat",
  ]),
  category("Rolls", [
    "Paneer Kathi Roll",
    "Veg Frankie",
    "Aloo Tikki Roll",
    "Cheese Roll",
    "Mushroom Roll",
    "Corn & Cheese Roll",
    "Hara Bhara Roll",
    "Tandoori Paneer Roll",
  ]),
  category("Parathas", [
    "Aloo Paratha",
    "Paneer Paratha",
    "Gobi Paratha",
    "Mooli Paratha",
    "Mix Veg Paratha",
    "Cheese Paratha",
    "Pyaz Paratha",
    "Methi Paratha",
    "Chole Paratha",
  ]),
  category("Breads", [
    "Tandoori Roti",
    "Butter Naan",
    "Lachha Paratha",
    "Missi Roti",
    "Garlic Naan",
    "Roomali Roti",
    "Stuffed Kulcha",
    "Tava Roti",
    "Bajra Roti",
  ]),
  category("Main Course", [
    "Kadhai Paneer",
    "Veg Kofta",
    "Mix Veg",
    "Malai Kofta",
    "Navratan Korma",
    "Veg Jalfrezi",
    "Aloo Gobi",
    "Bhindi Masala",
    "Mushroom Masala",
    "Chana Masala",
  ]),
  category("Dal Specials", [
    "Dal Tadka",
    "Dal Makhani",
    "Yellow Dal Fry",
    "Dal Fry",
    "Dal Palak",
    "Lasooni Dal",
    "Punjabi Dal",
    "Panchmel Dal",
  ]),
  category("Paneer Specials", [
    "Paneer Butter Masala",
    "Shahi Paneer",
    "Paneer Lababdar",
    "Paneer Tikka Masala",
    "Paneer Korma",
    "Paneer Pasanda",
    "Paneer Do Pyaza",
    "Palak Paneer",
    "Paneer Bhurji",
    "Paneer Kali Mirch",
  ]),
  category("Rice", [
    "Jeera Rice",
    "Veg Pulao",
    "Steam Rice",
    "Peas Pulao",
    "Lemon Rice",
    "Veg Fried Rice",
    "Mushroom Rice",
    "Curd Rice",
    "Kashmiri Pulao",
  ]),
  category("Biryani", [
    "Veg Biryani",
    "Paneer Biryani",
    "Hyderabadi Veg Dum Biryani",
    "Mushroom Biryani",
    "Kashmiri Veg Biryani",
    "Tawa Biryani",
    "Dum Pukht Veg Biryani",
    "Special Kake Biryani",
  ]),
  category("Chinese", [
    "Veg Hakka Noodles",
    "Veg Manchurian",
    "Chilli Paneer",
    "Schezwan Fried Rice",
    "Garlic Fried Rice",
    "Chilli Garlic Noodles",
    "Baby Corn Chilli",
    "Mushroom Chilli",
    "Veg Crispy",
    "Schezwan Noodles",
  ]),
  category("Pizza", [
    "Margherita Pizza",
    "Veg Deluxe Pizza",
    "Farmhouse Pizza",
    "Paneer Tikka Pizza",
    "Mexican Green Wave",
    "Cheese Burst Veg Pizza",
    "Four Cheese Pizza",
    "Corn & Olive Pizza",
    "Onion Capsicum Pizza",
    "Tandoori Paneer Pizza",
  ]),
  category("Pasta", [
    "Red Sauce Pasta",
    "White Sauce Pasta",
    "Arrabbiata Pasta",
    "Pink Sauce Pasta",
    "Aglio Olio Pasta",
    "Alfredo Pasta",
    "Pesto Pasta",
    "Mushroom Pasta",
    "Veg Lasagna",
  ]),
  category("Burgers", [
    "Veg Burger",
    "Aloo Tikki Burger",
    "Paneer Burger",
    "Cheese Burger",
    "Mushroom Burger",
    "Veg Supreme Burger",
    "Jain Burger",
    "Grill Burger",
  ]),
  category("Sandwiches", [
    "Veg Sandwich",
    "Grilled Sandwich",
    "Cheese Corn Sandwich",
    "Club Sandwich",
    "Paneer Grilled Sandwich",
    "Mumbai Masala Sandwich",
    "Veg Mayo Sandwich",
    "Mushroom Sandwich",
    "Corn Paneer Sandwich",
  ]),
  category("Snacks", [
    "French Fries",
    "Veg Nuggets",
    "Onion Rings",
    "Masala Pav",
    "Cheese Balls",
    "Stuffed Papad",
    "Veg Cutlet",
    "Corn Fritters",
    "Paneer Pakoda",
    "Veg Seekh Kebab",
  ]),
  category("Thalis", [
    "Veg Thali",
    "Punjabi Thali",
    "Deluxe Thali",
    "Mini Thali",
    "Rajasthani Thali",
    "Maharaja Thali",
    "Jain Thali",
  ]),
  category("Combos", [
    "Rice Combo",
    "Paratha Combo",
    "Burger Combo",
    "Snack Combo",
    "Family Combo",
    "Lunch Combo",
    "Dinner Combo",
    "Kids Combo",
  ]),
  category("Raita & Accompaniments", [
    "Boondi Raita",
    "Cucumber Raita",
    "Plain Curd",
    "Green Chutney",
    "Pickle",
    "Pineapple Raita",
    "Mint Raita",
    "Onion Salad",
    "Roasted Papad",
  ]),
  category("Beverages", [
    "Tea",
    "Coffee",
    "Lemon Soda",
    "Mineral Water",
    "Cold Coffee",
    "Masala Tea",
    "Iced Tea",
    "Ginger Lemon Tea",
    "Hot Chocolate",
  ]),
  category("Lassi & Chaas", [
    "Sweet Lassi",
    "Salted Lassi",
    "Masala Chaas",
    "Plain Chaas",
    "Mango Lassi",
    "Rose Lassi",
    "Jeera Chaas",
    "Mint Chaas",
  ]),
  category("Mocktails", [
    "Virgin Mojito",
    "Strawberry Cooler",
    "Blue Lagoon",
    "Peach Punch",
    "Kiwi Splash",
    "Lemon Mint Fizz",
    "Watermelon Cooler",
  ]),
  category("Shakes", [
    "Chocolate Shake",
    "Banana Shake",
    "Oreo Shake",
    "Mango Shake",
    "Vanilla Shake",
    "Strawberry Shake",
    "KitKat Shake",
    "Butterscotch Shake",
  ]),
  category("Desserts", [
    "Gulab Jamun",
    "Rasmalai",
    "Brownie with Ice Cream",
    "Gajar Halwa",
    "Moong Dal Halwa",
    "Fruit Custard",
    "Hot Chocolate Fudge",
    "Kesari",
    "Rabri Falooda",
    "Ice Cream Sundae",
  ]),
  category("Ice Creams", [
    "Vanilla Ice Cream",
    "Chocolate Ice Cream",
    "Strawberry Ice Cream",
    "Butterscotch Ice Cream",
    "Kesar Pista Ice Cream",
    "Black Currant Ice Cream",
    "Mango Ice Cream",
    "Coffee Ice Cream",
    "Mint Chocolate Chip Ice Cream",
  ]),
  category("Traditional Sweets", [
    "Jalebi",
    "Kaju Katli",
    "Peda",
    "Soan Papdi",
    "Mysore Pak",
    "Besan Ladoo",
    "Motichoor Ladoo",
    "Barfi",
  ]),
  category("Jain Food", [
    "Jain Veg Biryani",
    "Jain Paneer Masala",
    "Jain Aloo Gobi",
    "Jain Mix Veg",
    "Jain Chana Masala",
    "Jain Dal Tadka",
    "Jain Paratha",
    "Jain Pulao",
  ]),
  category("Signature Specials", [
    "Chef's Special Paneer",
    "Kake Signature Curry",
    "Special Veg Platter",
    "Tandoori Veg Platter",
    "Signature Korma",
    "Royal Veg Handi",
    "Kake Special Biryani",
    "Signature Chaat Platter",
  ]),
  category("Family Packs", [
    "Family Veg Feast",
    "Jumbo Paneer Pack",
    "Mix Veg Family Pack",
    "Rice Family Pack",
    "Paratha Family Pack",
    "Starter Family Pack",
    "Combo Family Meal",
  ]),
  category("Party Platters", [
    "Party Starter Platter",
    "Celebration Thali",
    "Royal Veg Platter",
    "Chat Platter",
    "Party Biryani Platter",
    "Mocktail Platter",
    "Dessert Platter",
    "Grand Feast Platter",
  ]),
];

const pages = new Map(
  Array.from(document.querySelectorAll("[data-page]"), (element) => [
    element.dataset.page,
    element,
  ]),
);

const elements = {
  navButtons: document.querySelectorAll("[data-nav]"),
  tableButtons: document.querySelectorAll(".table-tile"),
  captainTableGrid: document.querySelector('[data-page="captain"] .table-grid'),
  menuTitle: document.querySelector("[data-menu-title]"),
  menuSearch: document.querySelector("[data-menu-search]"),
  categoryList: document.querySelector("[data-category-list]"),
  menuPanelOrder: document.querySelector(".menu-panel--order"),
  sousChefShell: document.querySelector("[data-sous-chef-shell]"),
  sousChefTableGrid: document.querySelector("[data-sous-chef-table-grid]"),
  sousChefLiveCategories: document.querySelector("[data-sous-chef-live-categories]"),
  sousChefLiveEmpty: document.querySelector("[data-sous-chef-live-empty]"),
  sousChefSidebar: document.querySelector("[data-sous-chef-sidebar]"),
  sousChefCollapseToggle: document.querySelector("[data-sous-chef-collapse-toggle]"),
  sousChefCollapseIcon: document.querySelector("[data-sous-chef-collapse-icon]"),
  sousChefTicketsRow: document.querySelector("[data-sous-chef-tickets-row]"),
  ticketsShell: document.querySelector("[data-tickets-shell]"),
  ticketsList: document.querySelector("[data-tickets-list]"),
  ticketsEmpty: document.querySelector("[data-tickets-empty]"),
  ticketsCount: document.querySelector("[data-tickets-count]"),
  ticketsCountRow: document.querySelector("[data-tickets-count-row]"),
  ticketsLiveCategories: document.querySelector("[data-tickets-live-categories]"),
  ticketsLiveEmpty: document.querySelector("[data-tickets-live-empty]"),
  ticketsSidebar: document.querySelector("[data-tickets-sidebar]"),
  ticketsTablesRow: document.querySelector("[data-tickets-tables-row]"),
  ticketsCollapseToggle: document.querySelector("[data-tickets-collapse-toggle]"),
  ticketsCollapseIcon: document.querySelector("[data-tickets-collapse-icon]"),
  ticketsActionPopup: document.querySelector("[data-tickets-action-popup]"),
  ticketsActionTitle: document.querySelector("[data-tickets-action-title]"),
  ticketsActionClose: document.querySelector("[data-tickets-action-close]"),
  ticketsActionActions: document.querySelector("[data-tickets-action-actions]"),
  billTitle: document.querySelector("[data-bill-title]"),
  billEmpty: document.querySelector("[data-bill-empty]"),
  billFilled: document.querySelector("[data-bill-filled]"),
  billColumns: document.querySelector("[data-bill-columns]"),
  billList: document.querySelector("[data-bill-list]"),
  billTotal: document.querySelector("[data-bill-total]"),
  billPrint: document.querySelector("[data-bill-print]"),
  billDeliveryPopup: document.querySelector("[data-bill-delivery-popup]"),
  billDeliveryClose: document.querySelector("[data-bill-delivery-close]"),
  billDeliveryYes: document.querySelector("[data-bill-delivery-yes]"),
  captainBillTitle: document.querySelector("[data-captain-bill-title]"),
  captainBillEmpty: document.querySelector("[data-captain-bill-empty]"),
  captainBillFilled: document.querySelector("[data-captain-bill-filled]"),
  captainBillList: document.querySelector("[data-captain-bill-list]"),
  captainBillTotal: document.querySelector("[data-captain-bill-total]"),
  captainBillPrint: document.querySelector("[data-captain-bill-print]"),
  captainDeliveryTitle: document.querySelector("[data-captain-delivery-title]"),
  captainDeliveryEmpty: document.querySelector("[data-captain-delivery-empty]"),
  captainDeliveryFilled: document.querySelector("[data-captain-delivery-filled]"),
  captainDeliveryList: document.querySelector("[data-captain-delivery-list]"),
  captainDeliveryPopup: document.querySelector("[data-captain-delivery-popup]"),
  captainDeliveryPopupClose: document.querySelector("[data-captain-delivery-popup-close]"),
  captainDeliveryPopupYes: document.querySelector("[data-captain-delivery-popup-yes]"),
  orderColumns: document.querySelector("[data-order-columns]"),
  orderEmpty: document.querySelector("[data-order-empty]"),
  orderList: document.querySelector("[data-order-list]"),
  orderFooter: document.querySelector("[data-order-footer]"),
  orderShare: document.querySelector("[data-order-share]"),
  orderBill: document.querySelector("[data-order-bill]"),
  orderDelivered: document.querySelector("[data-order-delivered]"),
  orderNew: document.querySelector("[data-order-new]"),
  dishModal: document.querySelector("[data-dish-modal]"),
  dishModalTitle: document.querySelector("[data-dish-modal-title]"),
  dishModalNote: document.querySelector("[data-dish-modal-note]"),
  dishModalQuantity: document.querySelector("[data-dish-modal-quantity]"),
  dishModalActions: document.querySelector("[data-dish-modal-actions]"),
};

const state = {
  page: "home",
  tableNumber: 1,
  search: "",
  expandedCategories: new Set(),
  tableOrders: new Map(),
  captainDraftStartedAtByTable: new Map(),
  diningTableIdsByNumber: new Map(),
  diningTableNumbersById: new Map(),
  order: [],
  selectedDish: null,
  selectedDishQuantity: 1,
  selectedDishNote: "",
  selectedDishReceivedAt: null,
  ticketsViewMode: "overview",
  ticketsSelectedCategory: null,
  sousChefSidebarCollapsed: false,
  ticketsSidebarCollapsed: false,
  ticketsActionTableNumber: null,
  ticketsActionIndex: null,
  ticketsActionMode: null,
  ticketsActionPopupPosition: null,
  captainDeliveryPromptIndex: null,
  captainDeliveryPopupPosition: null,
  billDeliveryPromptIndex: null,
  billDeliveryPopupPosition: null,
  editingOrderIndex: null,
};

let databaseHydrated = false;
let databaseBootstrapPromise = Promise.resolve();
let databaseWriteQueue = Promise.resolve();

function category(name, items) {
  return { name, items };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function parseRoute() {
  const hash = location.hash.replace(/^#/, "");

  if (hash.startsWith("menu-")) {
    const tableNumber = Number(hash.slice(5));
    return {
      page: "menu",
      tableNumber: Number.isFinite(tableNumber) && tableNumber > 0 ? tableNumber : 1,
    };
  }

  if (hash === "captain") {
    return { page: "captain" };
  }

  if (hash === "cashier") {
    return { page: "cashier" };
  }

  if (hash === "sous-chef") {
    return { page: "sous-chef" };
  }

  if (hash === "tickets") {
    return { page: "tickets" };
  }

  if (hash.startsWith("bill-")) {
    const tableNumber = Number(hash.slice(5));
    return {
      page: "bill",
      tableNumber: Number.isFinite(tableNumber) && tableNumber > 0 ? tableNumber : 1,
    };
  }

  if (hash.startsWith("captain-bill-")) {
    const tableNumber = Number(hash.slice(13));
    return {
      page: "captain-bill",
      tableNumber: Number.isFinite(tableNumber) && tableNumber > 0 ? tableNumber : 1,
    };
  }

  if (hash.startsWith("captain-delivery-")) {
    const tableNumber = Number(hash.slice(17));
    return {
      page: "captain-delivery",
      tableNumber: Number.isFinite(tableNumber) && tableNumber > 0 ? tableNumber : 1,
    };
  }

  return { page: "home" };
}

function setRoute(page, tableNumber = 1) {
  if (page === "menu") {
    location.hash = `#menu-${tableNumber}`;
    return;
  }

  if (page === "captain") {
    location.hash = "#captain";
    return;
  }

  if (page === "cashier") {
    location.hash = "#cashier";
    return;
  }

  if (page === "sous-chef") {
    location.hash = "#sous-chef";
    return;
  }

  if (page === "tickets") {
    location.hash = "#tickets";
    return;
  }

  if (page === "bill") {
    location.hash = `#bill-${tableNumber}`;
    return;
  }

  if (page === "captain-bill") {
    location.hash = `#captain-bill-${tableNumber}`;
    return;
  }

  if (page === "captain-delivery") {
    location.hash = `#captain-delivery-${tableNumber}`;
    return;
  }

  location.hash = "";
}

function cloneOrderItems(orderItems) {
  return orderItems.map((item) => ({ ...item }));
}

function isPublishedOrderItem(item) {
  return Number.isFinite(item?.sharedAt);
}

function isSharedOrder(orderItems) {
  return orderItems.length > 0 && orderItems.every((item) => isPublishedOrderItem(item));
}

function getCaptainDraftStartedAt(tableNumber) {
  return state.captainDraftStartedAtByTable.get(tableNumber) || null;
}

function isCaptainDraftSessionItem(item, draftStartedAt) {
  if (!Number.isFinite(draftStartedAt)) return true;

  const receivedAt = Number.isFinite(item?.receivedAt) ? item.receivedAt : null;
  const sharedAt = Number.isFinite(item?.sharedAt) ? item.sharedAt : null;

  return (
    (receivedAt !== null && receivedAt >= draftStartedAt) ||
    (sharedAt !== null && sharedAt >= draftStartedAt)
  );
}

function getOrderItemTimerStopAt(item) {
  return item?.acceptance === "delivered" && Number.isFinite(item.deliveredAt)
    ? item.deliveredAt
    : null;
}

function getOrderItemElapsedTime(item, fallbackReceivedAt = Date.now()) {
  const receivedAt = Number.isFinite(item?.receivedAt) ? item.receivedAt : fallbackReceivedAt;
  const stoppedAt = getOrderItemTimerStopAt(item);
  return formatElapsedTime((Number.isFinite(stoppedAt) ? stoppedAt : Date.now()) - receivedAt);
}

function getTableVisualState(tableNumber, { publishedOnly = false } = {}) {
  const orderItems = state.tableOrders.get(tableNumber) || [];
  const activeItems = orderItems.filter((item) => {
    if (publishedOnly && !isPublishedOrderItem(item)) return false;
    return item.acceptance !== "delivered";
  });

  if (!activeItems.length) return "empty";

  const hasPreparingItem = activeItems.some(
    (item) => item.acceptance === "out" || item.acceptance === "accepted",
  );
  return hasPreparingItem ? "preparing" : "live";
}

function applyTableVisualState(button, visualState, tableNumber) {
  button.classList.toggle("table-tile--live", visualState === "live");
  button.classList.toggle("table-tile--preparing", visualState === "preparing");
  button.setAttribute(
    "aria-label",
    visualState === "preparing"
      ? `Table ${tableNumber}, preparing order`
      : visualState === "live"
        ? `Table ${tableNumber}, new order`
        : `Table ${tableNumber}`,
  );
}

function toSupabaseTimestamp(value) {
  return Number.isFinite(value) ? new Date(value).toISOString() : null;
}

function fromSupabaseTimestamp(value) {
  const parsedTimestamp = Date.parse(value);
  return Number.isFinite(parsedTimestamp) ? parsedTimestamp : null;
}

async function supabaseRequest(path, { method = "GET", query = {}, body, prefer } = {}) {
  const url = new URL(`${SUPABASE_REST_URL}/${path}`);
  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, value);
    }
  }

  const headers = {
    apikey: SUPABASE_PUBLISHABLE_KEY,
    Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
    Accept: "application/json",
  };

  if (body !== undefined) {
    headers["Content-Type"] = "application/json";
  }

  if (prefer) {
    headers.Prefer = prefer;
  }

  const response = await fetch(url, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const responseText = await response.text();
    throw new Error(`Supabase request failed (${response.status}): ${responseText}`);
  }

  if (response.status === 204) {
    return null;
  }

  const responseText = await response.text();
  if (!responseText.trim()) {
    return null;
  }

  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("json")) {
    try {
      return JSON.parse(responseText);
    } catch {
      return null;
    }
  }

  return JSON.parse(responseText);
}

function mapDbOrderItem(row) {
  return {
    categoryName: row.category_name,
    dishName: row.dish_name,
    quantity: Number(row.quantity) || 1,
    note: row.note || "",
    acceptance:
      row.acceptance_status === "pending"
        ? null
        : row.acceptance_status === "accepted"
          ? "out"
          : row.acceptance_status === "out" ||
              row.acceptance_status === "rejected" ||
              row.acceptance_status === "delivered"
            ? row.acceptance_status
            : null,
    receivedAt: fromSupabaseTimestamp(row.received_at) ?? Date.now(),
    sharedAt: fromSupabaseTimestamp(row.shared_at),
    outAt: fromSupabaseTimestamp(row.out_at),
    rejectedAt: fromSupabaseTimestamp(row.rejected_at),
    deliveredAt: fromSupabaseTimestamp(row.delivered_at),
  };
}

function mapOrderItemForDb(item, sortOrder) {
  return {
    category_name: item.categoryName,
    dish_name: item.dishName,
    quantity: Number(item.quantity) || 1,
    note: item.note || "",
    acceptance_status:
      item.acceptance === "out" || item.acceptance === "delivered" || item.acceptance === "rejected"
        ? item.acceptance
        : item.acceptance === "accepted"
          ? "out"
          : "pending",
    shared_at: toSupabaseTimestamp(item.sharedAt),
    received_at: toSupabaseTimestamp(item.receivedAt) || new Date().toISOString(),
    out_at: toSupabaseTimestamp(item.outAt),
    rejected_at: toSupabaseTimestamp(item.rejectedAt),
    delivered_at: toSupabaseTimestamp(item.deliveredAt),
    sort_order: sortOrder,
  };
}

function enqueueDatabaseWrite(task) {
  databaseWriteQueue = databaseWriteQueue
    .then(() => databaseBootstrapPromise)
    .then(() => task())
    .catch((error) => {
      console.warn("Database write skipped:", error);
    });

  return databaseWriteQueue;
}

async function hydrateOrdersFromDatabase() {
  const rows = await supabaseRequest("orders", {
    query: {
      select: "table_number,table_id,shared_at,order_items(*)",
      order: "table_number.asc",
    },
  });

  const tableOrders = new Map();
  for (const row of rows || []) {
    const tableNumber = Number(
      row.table_number ?? state.diningTableNumbersById.get(Number(row.table_id)) ?? row.table_id,
    );
    if (!Number.isFinite(tableNumber)) continue;

    const orderItems = Array.isArray(row.order_items)
      ? row.order_items
          .slice()
          .sort((left, right) => (Number(left.sort_order) || 0) - (Number(right.sort_order) || 0))
          .map(mapDbOrderItem)
      : [];

    if (orderItems.length > 0) {
      tableOrders.set(tableNumber, orderItems);
    }
  }

  state.tableOrders = tableOrders;
  databaseHydrated = true;
}

async function hydrateDiningTablesFromDatabase() {
  const rows = await supabaseRequest("dining_tables", {
    query: {
      select: "id,table_number",
      order: "table_number.asc",
    },
  });

  const idsByNumber = new Map();
  const numbersById = new Map();
  for (const row of rows || []) {
    const tableId = Number(row.id);
    const tableNumber = Number(row.table_number);
    if (!Number.isFinite(tableId) || !Number.isFinite(tableNumber)) continue;
    idsByNumber.set(tableNumber, tableId);
    numbersById.set(tableId, tableNumber);
  }

  state.diningTableIdsByNumber = idsByNumber;
  state.diningTableNumbersById = numbersById;
}

async function resolveDiningTableId(tableNumber) {
  if (!Number.isFinite(tableNumber)) return null;

  const cachedId = state.diningTableIdsByNumber.get(tableNumber);
  if (Number.isFinite(cachedId)) {
    return cachedId;
  }

  const existingRows = await supabaseRequest("dining_tables", {
    query: {
      select: "id,table_number",
      table_number: `eq.${tableNumber}`,
      limit: "1",
    },
  });
  const existingId = Number(existingRows?.[0]?.id);
  if (Number.isFinite(existingId)) {
    state.diningTableIdsByNumber.set(tableNumber, existingId);
    state.diningTableNumbersById.set(existingId, tableNumber);
    return existingId;
  }

  const insertedRows = await supabaseRequest("dining_tables", {
    method: "POST",
    query: {
      select: "id,table_number",
    },
    prefer: "return=representation",
    body: {
      table_number: tableNumber,
    },
  });
  const insertedId = Number(insertedRows?.[0]?.id);
  if (Number.isFinite(insertedId)) {
    state.diningTableIdsByNumber.set(tableNumber, insertedId);
    state.diningTableNumbersById.set(insertedId, tableNumber);
    return insertedId;
  }

  return null;
}

async function persistOrderToDatabase(tableNumber, orderItems) {
  if (!Number.isFinite(tableNumber)) return;

  const existingOrderRows = await supabaseRequest("orders", {
    query: {
      select: "id,table_number,table_id",
      table_number: `eq.${tableNumber}`,
      limit: "1",
    },
  });
  const existingOrderId = existingOrderRows?.[0]?.id || null;

  if (orderItems.length === 0) {
    if (existingOrderId) {
      await supabaseRequest("order_items", {
        method: "DELETE",
        query: {
          order_id: `eq.${existingOrderId}`,
        },
        prefer: "return=minimal",
      });

      await supabaseRequest("orders", {
        method: "DELETE",
        query: {
          id: `eq.${existingOrderId}`,
        },
        prefer: "return=minimal",
      });
    }
    return;
  }

  const diningTableId = await resolveDiningTableId(tableNumber);
  if (!Number.isFinite(diningTableId)) return;

  const orderSharedAt = isSharedOrder(orderItems)
    ? Math.min(...orderItems.map((item) => Number(item.sharedAt)).filter((value) => Number.isFinite(value)))
    : null;
  const orderStatus = isSharedOrder(orderItems) ? "shared" : "open";

  let orderId = existingOrderId;
  if (orderId) {
    await supabaseRequest("orders", {
      method: "PATCH",
      query: {
        id: `eq.${orderId}`,
        select: "id,table_number,table_id",
      },
      prefer: "return=representation",
      body: {
        table_number: tableNumber,
        table_id: diningTableId,
        status: orderStatus,
        shared_at: toSupabaseTimestamp(orderSharedAt),
      },
    });
  } else {
    const orderRows = await supabaseRequest("orders", {
      method: "POST",
      query: {
        select: "id,table_number,table_id",
      },
      prefer: "return=representation",
      body: {
        table_number: tableNumber,
        table_id: diningTableId,
        status: orderStatus,
        shared_at: toSupabaseTimestamp(orderSharedAt),
      },
    });
    orderId = orderRows?.[0]?.id || null;
  }

  if (!orderId) {
    const fallbackRows = await supabaseRequest("orders", {
      query: {
        select: "id,table_number,table_id",
        table_number: `eq.${tableNumber}`,
        limit: "1",
      },
    });
    orderId = fallbackRows?.[0]?.id || null;
  }
  if (!orderId) return;

  await supabaseRequest("order_items", {
    method: "DELETE",
    query: {
      order_id: `eq.${orderId}`,
    },
    prefer: "return=minimal",
  });

  const payload = orderItems.map((item, index) => ({
    order_id: orderId,
    ...mapOrderItemForDb(item, index),
  }));

  if (payload.length > 0) {
    await supabaseRequest("order_items", {
      method: "POST",
      prefer: "return=minimal",
      body: payload,
    });
  }
}

function isOrderRoute(pageName) {
  return pageName === "menu" || pageName === "bill" || pageName === "captain-bill" || pageName === "captain-delivery";
}

function persistCurrentOrder() {
  if (!isOrderRoute(state.page)) return;
  const snapshot = cloneOrderItems(state.order);
  const draftStartedAt = getCaptainDraftStartedAt(state.tableNumber);

  if (Number.isFinite(draftStartedAt)) {
    const preservedSharedItems = cloneOrderItems(state.tableOrders.get(state.tableNumber) || []).filter(
      (item) =>
        isPublishedOrderItem(item) &&
        Number.isFinite(item.sharedAt) &&
        item.sharedAt < draftStartedAt,
    );
    const mergedOrderItems = [...preservedSharedItems, ...snapshot];
    state.tableOrders.set(state.tableNumber, mergedOrderItems);
    enqueueDatabaseWrite(() => persistOrderToDatabase(state.tableNumber, mergedOrderItems));
    return;
  }

  state.tableOrders.set(state.tableNumber, snapshot);
  enqueueDatabaseWrite(() => persistOrderToDatabase(state.tableNumber, snapshot));
}

function loadOrderForTable(tableNumber) {
  const draftStartedAt = getCaptainDraftStartedAt(tableNumber);
  const storedOrderItems = cloneOrderItems(state.tableOrders.get(tableNumber) || []);
  const visibleOrderItems = Number.isFinite(draftStartedAt)
    ? storedOrderItems.filter((item) => isCaptainDraftSessionItem(item, draftStartedAt))
    : storedOrderItems;

  state.order = visibleOrderItems.map((item) => ({
    ...item,
    acceptance:
      item.acceptance === "accepted"
        ? "out"
        : item.acceptance === "out" || item.acceptance === "delivered" || item.acceptance === "rejected"
          ? item.acceptance
          : null,
    receivedAt: Number.isFinite(item.receivedAt) ? item.receivedAt : Date.now(),
    sharedAt: Number.isFinite(item.sharedAt) ? item.sharedAt : null,
  }));
}

function showPage(pageName) {
  for (const [name, page] of pages.entries()) {
    page.hidden = name !== pageName;
  }
}

function toggleCategory(categoryName) {
  if (state.expandedCategories.has(categoryName)) {
    state.expandedCategories.clear();
  } else {
    state.expandedCategories = new Set([categoryName]);
  }
  renderMenu();
}

function openDishPopup(categoryName, dishName, options = {}) {
  state.selectedDish = { categoryName, dishName };
  state.selectedDishQuantity = Number.isFinite(options.quantity) && options.quantity > 0
    ? options.quantity
    : 1;
  state.selectedDishNote = typeof options.note === "string" ? options.note : "";
  state.selectedDishReceivedAt = Number.isFinite(options.receivedAt) ? options.receivedAt : null;
  state.editingOrderIndex = Number.isInteger(options.orderIndex) ? options.orderIndex : null;
  renderActiveOrderView();

  requestAnimationFrame(() => {
    elements.dishModalNote?.focus({ preventScroll: true });
  });
}

function closeDishPopup() {
  if (!state.selectedDish) return;

  state.selectedDish = null;
  state.selectedDishQuantity = 1;
  state.selectedDishNote = "";
  state.selectedDishReceivedAt = null;
  state.editingOrderIndex = null;
  persistCurrentOrder();
  renderActiveOrderView();
}

function adjustDishQuantity(delta) {
  if (!state.selectedDish) return;

  state.selectedDishQuantity = Math.max(1, state.selectedDishQuantity + delta);
  renderActiveOrderView();
}

function confirmDishPopup() {
  if (!state.selectedDish) return;

  const existingOrderItem = Number.isInteger(state.editingOrderIndex)
    ? state.order[state.editingOrderIndex]
    : null;

  const orderItem = {
    categoryName: state.selectedDish.categoryName,
    dishName: state.selectedDish.dishName,
    quantity: state.selectedDishQuantity,
    note: state.selectedDishNote.trim(),
    acceptance: existingOrderItem?.acceptance ?? null,
    receivedAt: Number.isFinite(state.selectedDishReceivedAt)
      ? state.selectedDishReceivedAt
      : Date.now(),
    sharedAt: Number.isFinite(existingOrderItem?.sharedAt) ? existingOrderItem.sharedAt : null,
    outAt: Number.isFinite(existingOrderItem?.outAt) ? existingOrderItem.outAt : null,
    rejectedAt: Number.isFinite(existingOrderItem?.rejectedAt) ? existingOrderItem.rejectedAt : null,
    deliveredAt: Number.isFinite(existingOrderItem?.deliveredAt) ? existingOrderItem.deliveredAt : null,
  };

  if (
    Number.isInteger(state.editingOrderIndex) &&
    state.editingOrderIndex >= 0 &&
    state.editingOrderIndex < state.order.length
  ) {
    state.order[state.editingOrderIndex] = orderItem;
  } else {
    state.order.push(orderItem);
  }

  closeDishPopup();
}

function deleteDishPopup() {
  if (!state.selectedDish) return;

  if (
    Number.isInteger(state.editingOrderIndex) &&
    state.editingOrderIndex >= 0 &&
    state.editingOrderIndex < state.order.length
  ) {
    state.order.splice(state.editingOrderIndex, 1);
  }

  closeDishPopup();
}

function syncDishPopup() {
  if (!elements.dishModal) return;

  const isOpen = Boolean(state.selectedDish);
  const isEditing =
    Number.isInteger(state.editingOrderIndex) &&
    state.editingOrderIndex >= 0 &&
    state.editingOrderIndex < state.order.length;
  elements.dishModal.classList.toggle("dish-modal--editing", isEditing);
  elements.dishModalActions?.classList.toggle("dish-modal__actions--editing", isEditing);
  syncDishPopupBounds(isOpen && isEditing);
  elements.dishModal.hidden = !isOpen;
  elements.dishModal.setAttribute("aria-hidden", isOpen ? "false" : "true");
  document.body.classList.toggle("modal-open", isOpen);

  if (!isOpen || !state.selectedDish) return;

  if (elements.dishModalTitle) {
    elements.dishModalTitle.textContent = state.selectedDish.dishName;
  }

  if (elements.dishModalNote && elements.dishModalNote.value !== state.selectedDishNote) {
    elements.dishModalNote.value = state.selectedDishNote;
  }

  if (elements.dishModalQuantity) {
    elements.dishModalQuantity.textContent = String(state.selectedDishQuantity);
  }

  if (elements.dishModalActions) {
    elements.dishModalActions.innerHTML = buildDishModalActionsMarkup(isEditing);
  }
}

function syncDishPopupBounds(shouldMeasure) {
  if (!elements.dishModal) return;

  if (!shouldMeasure) {
    elements.dishModal.style.removeProperty("--dish-modal-edit-right");
    return;
  }

  if (state.page === "bill" || state.page === "captain-bill") {
    elements.dishModal.style.setProperty("--dish-modal-edit-right", "0px");
    return;
  }

  if (!elements.menuPanelOrder) {
    elements.dishModal.style.removeProperty("--dish-modal-edit-right");
    return;
  }

  const orderPanelLeft = elements.menuPanelOrder.getBoundingClientRect().left;
  if (!Number.isFinite(orderPanelLeft)) return;

  const rightInset = Math.max(0, Math.round(window.innerWidth - orderPanelLeft + 1));
  elements.dishModal.style.setProperty("--dish-modal-edit-right", `${rightInset}px`);
}

function editOrderItem(index) {
  const orderItem = state.order[index];
  if (!orderItem) return;

  openDishPopup(orderItem.categoryName, orderItem.dishName, {
    quantity: orderItem.quantity,
    note: orderItem.note,
    receivedAt: orderItem.receivedAt,
    orderIndex: index,
  });
}

function shareOrder() {
  if (!state.order.length) return;

  const sharedAt = Date.now();
  state.order = state.order.map((item) =>
    isPublishedOrderItem(item)
      ? item
      : {
          ...item,
          sharedAt,
        },
  );
  renderMenu();
  renderCaptain();
  renderSousChef();
  renderTickets();

  const orderSummary = state.order
    .map((item) => {
      const quantityText = item.quantity > 1 ? ` x${item.quantity}` : "";
      const noteText = item.note ? ` — ${item.note}` : "";
      return `${item.dishName}${quantityText}${noteText}`;
    })
    .join("\n");

  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(orderSummary).catch(() => {});
  }
}

function startNewOrder() {
  if (!state.order.length) return;

  state.captainDraftStartedAtByTable.set(state.tableNumber, Date.now());
  state.order = [];
  state.selectedDish = null;
  state.selectedDishQuantity = 1;
  state.selectedDishNote = "";
  state.selectedDishReceivedAt = null;
  state.editingOrderIndex = null;
  persistCurrentOrder();
  renderMenu();
  renderCaptain();
  renderSousChef();
  renderTickets();
}

function buildOrderColumnsMarkup() {
  return `
    <div class="order-columns__item order-columns__item--name">Items</div>
    <div class="order-columns__item order-columns__item--qty">Qty</div>
    <div class="order-columns__item order-columns__item--edit">Edit</div>
  `;
}

function buildDishModalActionsMarkup(isEditing) {
  if (!isEditing) {
    return `
      <button class="dish-modal__add" type="button" data-dish-modal-add>
        Add
      </button>
    `;
  }

  return `
    <button class="dish-modal__delete" type="button" data-dish-modal-delete>
      Delete
    </button>
    <button class="dish-modal__add dish-modal__add--editing" type="button" data-dish-modal-add>
      Edit
    </button>
  `;
}

function buildChevronIconMarkup() {
  return `
    <svg viewBox="0 0 24 24" role="presentation" focusable="false">
      <path d="M6 9l6 6 6-6"></path>
    </svg>
  `;
}

function buildEditIconMarkup() {
  return `
    <svg viewBox="0 0 24 24" role="presentation" focusable="false">
      <path d="M4 20h4.2L20 8.2a1.5 1.5 0 0 0 0-2.1l-2.1-2.1a1.5 1.5 0 0 0-2.1 0L4 16.9V20Z"></path>
      <path d="M13.2 5.1l5.7 5.7"></path>
    </svg>
  `;
}

function buildRefreshIconMarkup() {
  return `
    <img class="ticket-card__status-image bill-item__status-image" src="./Refresh.png" alt="" aria-hidden="true" />
  `;
}

function buildCategoryTicketAcceptanceMarkup(item, rowTableNumber, rowIndex) {
  if (item.acceptance === "out") {
    return `
      <button
        class="ticket-card__status bill-item__status bill-item__status--out"
        type="button"
        data-ticket-deliver="${rowIndex}"
        data-ticket-table="${escapeHtml(String(rowTableNumber))}"
        aria-label="Mark ${escapeHtml(item.dishName)} as delivered"
      >Out</button>`;
  }

  if (item.acceptance === "delivered") {
    return `
      <div class="ticket-card__status bill-item__status bill-item__status--delivered" aria-hidden="true">
        DLV
      </div>`;
  }

  if (item.acceptance === "rejected") {
    return `
      <button
        class="ticket-card__status bill-item__status bill-item__status--rejected"
        type="button"
        data-ticket-reset="${rowIndex}"
        data-ticket-table="${escapeHtml(String(rowTableNumber))}"
        aria-label="Reset ${escapeHtml(item.dishName)}"
      >${buildRefreshIconMarkup()}</button>`;
  }

  return `
    <div class="bill-item__acceptance ticket-card__acceptance">
      <button
        class="bill-item__accept bill-item__accept--reject"
        type="button"
        data-ticket-reject="${rowIndex}"
        data-ticket-table="${escapeHtml(String(rowTableNumber))}"
        aria-label="Reject ${escapeHtml(item.dishName)}"
      >×</button>
      <button
        class="bill-item__accept bill-item__accept--accept"
        type="button"
        data-ticket-accept="${rowIndex}"
        data-ticket-table="${escapeHtml(String(rowTableNumber))}"
        aria-label="Accept ${escapeHtml(item.dishName)}"
      >✓</button>
    </div>`;
}

function getTicketDataForOrder(tableNumber, orderItems) {
  const publishedItems = orderItems
    .map((item, orderIndex) => ({ ...item, orderIndex }))
    .filter((item) => isPublishedOrderItem(item));
  const activeItems = publishedItems.filter((item) => item.acceptance !== "delivered");
  if (!activeItems.length) return null;

  const receivedAt = activeItems.reduce((earliest, item) => {
    const itemReceivedAt = Number.isFinite(item.sharedAt)
      ? item.sharedAt
      : Number.isFinite(item.receivedAt)
        ? item.receivedAt
        : Date.now();
    return Math.min(earliest, itemReceivedAt);
  }, Number.POSITIVE_INFINITY);

  const categories = [];
  const seenCategoryNames = new Set();

  for (const item of activeItems) {
    if (seenCategoryNames.has(item.categoryName)) continue;
    seenCategoryNames.add(item.categoryName);
    categories.push(item.categoryName);
  }

  return {
    tableNumber,
    items: publishedItems,
    categories,
    receivedAt: Number.isFinite(receivedAt) ? receivedAt : Date.now(),
    isNew: activeItems.every((item) => !item.acceptance),
  };
}

function getActiveTicketData() {
  return Array.from(state.tableOrders.entries())
    .map(([tableNumber, orderItems]) => {
      return getTicketDataForOrder(tableNumber, orderItems);
    })
    .filter(Boolean)
    .sort((left, right) => left.tableNumber - right.tableNumber);
}

function getPreferredTicketData(activeTickets) {
  if (!activeTickets.length) return null;

  const preferredTicket = activeTickets.find((ticket) => ticket.tableNumber === state.tableNumber);
  return preferredTicket || activeTickets[0];
}

function getLiveCategoryNames(activeTickets) {
  const liveCategoryNames = [];
  const seenCategoryNames = new Set();

  for (const categoryData of menuCategories) {
    const hasOrderInCategory = activeTickets.some((ticket) =>
      ticket.items.some(
        (item) => item.categoryName === categoryData.name && item.acceptance !== "delivered",
      ),
    );

    if (hasOrderInCategory && !seenCategoryNames.has(categoryData.name)) {
      seenCategoryNames.add(categoryData.name);
      liveCategoryNames.push(categoryData.name);
    }
  }

  return liveCategoryNames;
}

function getCategoryTicketData(activeTickets, categoryName) {
  const normalizedCategoryName = normalizeTicketCategoryName(categoryName);
  if (!normalizedCategoryName) return null;

  const rows = [];
  let earliestReceivedAt = Number.POSITIVE_INFINITY;
  let hasActiveRows = false;

  for (const ticket of activeTickets) {
    ticket.items.forEach((item, itemIndex) => {
      if (!isPublishedOrderItem(item)) return;
      if (normalizeTicketCategoryName(item.categoryName) !== normalizedCategoryName) return;

      if (item.acceptance !== "delivered") {
        hasActiveRows = true;
      }

      const receivedAt = Number.isFinite(item.sharedAt)
        ? item.sharedAt
        : Number.isFinite(item.receivedAt)
          ? item.receivedAt
          : ticket.receivedAt;
      earliestReceivedAt = Math.min(earliestReceivedAt, receivedAt);
      rows.push({
        ...item,
        tableNumber: ticket.tableNumber,
        orderIndex: Number.isInteger(item.orderIndex) ? item.orderIndex : itemIndex,
        receivedAt,
      });
    });
  }

  if (!rows.length || !hasActiveRows) return null;

  rows.sort((left, right) => {
    const leftReceivedAt = Number.isFinite(left.receivedAt) ? left.receivedAt : 0;
    const rightReceivedAt = Number.isFinite(right.receivedAt) ? right.receivedAt : 0;
    if (leftReceivedAt !== rightReceivedAt) return leftReceivedAt - rightReceivedAt;
    if (left.tableNumber !== right.tableNumber) return left.tableNumber - right.tableNumber;
    return left.orderIndex - right.orderIndex;
  });

  return {
    tableNumber: null,
    items: rows,
    categories: [categoryName],
    receivedAt: Number.isFinite(earliestReceivedAt) ? earliestReceivedAt : Date.now(),
    isNew: rows.filter((item) => item.acceptance !== "delivered").every((item) => !item.acceptance),
  };
}

function normalizeTicketCategoryName(value) {
  return String(value || "").trim().toLowerCase();
}

function buildTicketCardMarkup(ticketData, selectedCategory) {
  const selectedCategoryKey = normalizeTicketCategoryName(selectedCategory);
  const categoryEntries = ticketData.items
    .map((item, originalIndex) => ({ item, originalIndex }))
    .filter(({ item }) => {
      if (!selectedCategoryKey) return true;
      return normalizeTicketCategoryName(item.categoryName) === selectedCategoryKey;
    });

  return `
    <article
      class="ticket-card ticket-card--category"
      data-ticket-table="${escapeHtml(String(ticketData.tableNumber ?? ""))}"
      data-ticket-category="${escapeHtml(selectedCategory || "")}"
    >
      <div class="ticket-card__header ticket-card__header--category">
        <span>${escapeHtml(selectedCategory || "")}</span>
      </div>
      <div class="ticket-card__columns ticket-card__columns--category">
        <div class="ticket-card__column ticket-card__column--name">Items</div>
        <div class="ticket-card__column ticket-card__column--qty">Qty</div>
        <div class="ticket-card__column ticket-card__column--acceptance">Acceptance</div>
        <div class="ticket-card__column ticket-card__column--time">Time</div>
      </div>
      <div class="ticket-card__list">
        ${categoryEntries
          .map(({ item, originalIndex }) => {
            const rowTableNumber = Number.isInteger(item.tableNumber)
              ? item.tableNumber
              : ticketData.tableNumber;
            const rowIndex = Number.isInteger(item.orderIndex) ? item.orderIndex : originalIndex;
            const rowReceivedAt = Number.isFinite(item.receivedAt)
              ? item.receivedAt
              : ticketData.receivedAt;
            const rowStoppedAt = getOrderItemTimerStopAt(item);
            const itemClassName =
              item.acceptance === "out"
                ? "ticket-card__item ticket-card__item--out"
                : item.acceptance === "delivered"
                  ? "ticket-card__item ticket-card__item--delivered"
                  : item.acceptance === "rejected"
                    ? "ticket-card__item ticket-card__item--rejected"
                    : "ticket-card__item ticket-card__item--pending";

            return `
              <div
              class="${itemClassName}"
                data-ticket-item-index="${escapeHtml(String(rowIndex))}"
                data-ticket-item-start="${escapeHtml(String(rowReceivedAt))}"
                data-ticket-item-stop="${Number.isFinite(rowStoppedAt) ? escapeHtml(String(rowStoppedAt)) : ""}"
              >
                <div class="ticket-card__main ticket-card__main--category">
                  <div class="ticket-card__name">
                    <span class="ticket-card__dish">${escapeHtml(item.dishName)}</span>
                  </div>
                  <div class="ticket-card__qty">${escapeHtml(String(item.quantity))}</div>
                  ${buildCategoryTicketAcceptanceMarkup(item, rowTableNumber, rowIndex)}
                  <div class="ticket-card__time" data-ticket-time>
                    ${escapeHtml(getOrderItemElapsedTime(item, rowReceivedAt))}
                  </div>
                </div>
                ${
                  item.note
                    ? `<div class="ticket-card__note-row">
                        <div class="ticket-card__note">${escapeHtml(item.note)}</div>
                      </div>`
                    : ""
                }
              </div>`;
          })
          .join("")}
      </div>
    </article>`;
}

function buildTicketOverviewCardMarkup(ticketData) {
  return `
    <article class="ticket-card ticket-card--overview" data-ticket-table="${escapeHtml(String(ticketData.tableNumber))}">
      <div class="ticket-card__header ${ticketData.isNew ? "ticket-card__header--new" : "ticket-card__header--live"}">
        <span>Table ${escapeHtml(String(ticketData.tableNumber))}</span>
        <span data-ticket-header-time>${escapeHtml(formatElapsedTime(Date.now() - ticketData.receivedAt))}</span>
      </div>
      <div class="ticket-card__columns ticket-card__columns--overview">
        <div class="ticket-card__column ticket-card__column--name">Items</div>
        <div class="ticket-card__column ticket-card__column--qty">Qty</div>
        <div class="ticket-card__column ticket-card__column--edit">Edit</div>
      </div>
      <div class="ticket-card__list ticket-card__list--overview">
        ${ticketData.items
          .map((item, index) => {
            const rowIndex = Number.isInteger(item.orderIndex) ? item.orderIndex : index;
            const itemClassName =
              item.acceptance === "out"
                ? "ticket-card__item--out"
                : item.acceptance === "delivered"
                  ? "ticket-card__item--delivered"
                  : item.acceptance === "rejected"
                    ? "ticket-card__item--rejected"
                    : "ticket-card__item--pending";

            return `
              <div class="order-item ticket-card__item ticket-card__item--overview ${itemClassName}" data-ticket-table="${escapeHtml(String(ticketData.tableNumber))}" data-ticket-item-index="${escapeHtml(String(rowIndex))}">
                <div class="order-item__main ticket-card__main--overview">
                  <div class="order-item__name">${escapeHtml(`${index + 1}. ${item.dishName}`)}</div>
                  <div class="order-item__qty">${escapeHtml(String(item.quantity))}</div>
                  ${buildTicketOverviewActionMarkup(item, ticketData.tableNumber, rowIndex)}
                </div>
                ${
                  item.note
                    ? `<div class="order-item__note-row ticket-card__note-row--overview">
                        <div class="order-item__note">${escapeHtml(item.note)}</div>
                      </div>`
                    : ""
                }
              </div>`;
          })
          .join("")}
      </div>
    </article>`;
}

function buildTicketOverviewActionMarkup(item, tableNumber, rowIndex) {
  if (item.acceptance === "out") {
    return `
      <button
        class="ticket-card__status ticket-card__status--out"
        type="button"
        data-ticket-deliver="${escapeHtml(String(rowIndex))}"
        data-ticket-table="${escapeHtml(String(tableNumber))}"
        aria-label="Mark ${escapeHtml(item.dishName)} as delivered"
      >Out</button>`;
  }

  if (item.acceptance === "delivered") {
    return `
      <div class="ticket-card__status ticket-card__status--delivered" aria-hidden="true">
        DLV
      </div>`;
  }

  if (item.acceptance === "rejected") {
    return `
      <button
        class="ticket-card__status ticket-card__status--rejected"
        type="button"
        data-ticket-reset="${escapeHtml(String(rowIndex))}"
        data-ticket-table="${escapeHtml(String(tableNumber))}"
        aria-label="Reset ${escapeHtml(item.dishName)}"
      >${buildRefreshIconMarkup()}</button>`;
  }

  return `
    <button
      class="order-item__edit"
      type="button"
      data-ticket-overview-edit="${escapeHtml(String(rowIndex))}"
      data-ticket-table="${escapeHtml(String(tableNumber))}"
      aria-label="Edit ${escapeHtml(item.dishName)}"
    >${buildEditIconMarkup()}</button>`;
}

function buildTicketsActionPopupActionsMarkup(mode) {
  if (mode === "delivery") {
    return `
      <button class="tickets-action-popup__yes" type="button" data-tickets-action-yes>
        Yes
      </button>
    `;
  }

  return `
    <button class="tickets-action-popup__reject" type="button" data-tickets-action-reject>
      ×
    </button>
    <button class="tickets-action-popup__accept" type="button" data-tickets-action-accept>
      ✓
    </button>
  `;
}

function getTicketOrderItems(tableNumber) {
  const orderItems = state.tableOrders.get(tableNumber);
  return Array.isArray(orderItems) ? orderItems : null;
}

function computeTicketsActionPopupPosition(anchorElement, mode) {
  if (!anchorElement) return null;

  const anchorRect = anchorElement.getBoundingClientRect();
  const popupWidth = 274;
  const popupHeight = mode === "delivery" ? 120 : 150;
  const gap = 8;
  const margin = 12;

  let left = anchorRect.right + gap;
  if (left + popupWidth > window.innerWidth - margin) {
    left = anchorRect.left - gap - popupWidth;
  }

  left = Math.max(margin, Math.min(left, window.innerWidth - popupWidth - margin));

  let top = anchorRect.top - 16;
  top = Math.max(margin, Math.min(top, window.innerHeight - popupHeight - margin));

  return {
    left: Math.round(left),
    top: Math.round(top),
  };
}

function syncTicketsActionPopup() {
  if (!elements.ticketsActionPopup) return;

  const hasTable = Number.isInteger(state.ticketsActionTableNumber);
  const hasIndex = Number.isInteger(state.ticketsActionIndex);
  const orderItems = hasTable ? getTicketOrderItems(state.ticketsActionTableNumber) : null;
  const activeItem = orderItems && hasIndex ? orderItems[state.ticketsActionIndex] : null;
  const shouldShow =
    Boolean(activeItem) &&
    state.page === "tickets" &&
    (state.ticketsActionMode === "acceptance" || state.ticketsActionMode === "delivery");

  elements.ticketsActionPopup.hidden = !shouldShow;
  elements.ticketsActionPopup.setAttribute("aria-hidden", shouldShow ? "false" : "true");
  elements.ticketsActionPopup.classList.toggle(
    "tickets-action-popup--acceptance",
    state.ticketsActionMode === "acceptance",
  );
  elements.ticketsActionPopup.classList.toggle(
    "tickets-action-popup--delivery",
    state.ticketsActionMode === "delivery",
  );

  if (elements.ticketsActionTitle) {
    elements.ticketsActionTitle.textContent =
      state.ticketsActionMode === "delivery" ? "Delivered?" : "Acceptance";
  }

  if (elements.ticketsActionClose) {
    elements.ticketsActionClose.hidden = state.ticketsActionMode !== "delivery";
  }

  if (elements.ticketsActionActions) {
    elements.ticketsActionActions.innerHTML = shouldShow
      ? buildTicketsActionPopupActionsMarkup(state.ticketsActionMode)
      : "";
  }

  if (shouldShow && state.ticketsActionPopupPosition) {
    elements.ticketsActionPopup.style.left = `${state.ticketsActionPopupPosition.left}px`;
    elements.ticketsActionPopup.style.top = `${state.ticketsActionPopupPosition.top}px`;
  } else {
    elements.ticketsActionPopup.style.left = "";
    elements.ticketsActionPopup.style.top = "";
  }

  document.body.classList.toggle("modal-open", shouldShow);
}

function openTicketsActionPopup(tableNumber, index, mode, anchorElement) {
  if (!Number.isInteger(tableNumber) || !Number.isInteger(index)) return;

  const orderItems = getTicketOrderItems(tableNumber);
  const activeItem = orderItems?.[index];
  if (!activeItem) return;

  if (mode === "delivery" && activeItem.acceptance !== "out") return;
  if (mode === "acceptance" && activeItem.acceptance) return;

  state.ticketsActionTableNumber = tableNumber;
  state.ticketsActionIndex = index;
  state.ticketsActionMode = mode;
  state.ticketsActionPopupPosition = computeTicketsActionPopupPosition(anchorElement, mode);
  renderTickets();
}

function closeTicketsActionPopup() {
  if (
    !Number.isInteger(state.ticketsActionTableNumber) &&
    !Number.isInteger(state.ticketsActionIndex) &&
    !state.ticketsActionMode
  ) {
    return;
  }

  state.ticketsActionTableNumber = null;
  state.ticketsActionIndex = null;
  state.ticketsActionMode = null;
  state.ticketsActionPopupPosition = null;
  renderTickets();
}

function setTicketAcceptance(tableNumber, index, acceptance) {
  const orderItems = getTicketOrderItems(tableNumber);
  if (!orderItems || !orderItems[index]) return;

  const now = Date.now();
  const orderItem = orderItems[index];
  orderItem.acceptance = acceptance;

  if (acceptance === "out") {
    orderItem.outAt = Number.isFinite(orderItem.outAt) ? orderItem.outAt : now;
    orderItem.rejectedAt = null;
    orderItem.deliveredAt = null;
  } else if (acceptance === "rejected") {
    orderItem.rejectedAt = now;
    orderItem.outAt = null;
    orderItem.deliveredAt = null;
  } else if (acceptance === "delivered") {
    orderItem.deliveredAt = now;
    orderItem.outAt = Number.isFinite(orderItem.outAt) ? orderItem.outAt : now;
    orderItem.rejectedAt = null;
  } else {
    orderItem.outAt = null;
    orderItem.rejectedAt = null;
    orderItem.deliveredAt = null;
  }

  state.tableOrders.set(tableNumber, orderItems);
  const snapshot = cloneOrderItems(orderItems);
  enqueueDatabaseWrite(() => persistOrderToDatabase(tableNumber, snapshot));
}

function clearTicketsActionState() {
  state.ticketsActionTableNumber = null;
  state.ticketsActionIndex = null;
  state.ticketsActionMode = null;
  state.ticketsActionPopupPosition = null;
}

function goToChefTableOverview() {
  clearTicketsActionState();
  state.ticketsViewMode = "overview";
  state.ticketsSelectedCategory = null;
  state.ticketsSidebarCollapsed = false;
  state.billDeliveryPromptIndex = null;
  state.billDeliveryPopupPosition = null;
  setRoute("sous-chef");
}

function applyTicketsAcceptance(acceptance) {
  if (!Number.isInteger(state.ticketsActionTableNumber) || !Number.isInteger(state.ticketsActionIndex)) {
    return;
  }

  setTicketAcceptance(state.ticketsActionTableNumber, state.ticketsActionIndex, acceptance);
  clearTicketsActionState();
  renderTickets();
}

function confirmTicketsDelivery() {
  if (!Number.isInteger(state.ticketsActionTableNumber) || !Number.isInteger(state.ticketsActionIndex)) {
    return;
  }

  const tableNumber = state.ticketsActionTableNumber;
  const orderItems = getTicketOrderItems(tableNumber);
  const activeItem = orderItems?.[state.ticketsActionIndex];
  if (!activeItem || activeItem.acceptance !== "out") return;

  setTicketAcceptance(tableNumber, state.ticketsActionIndex, "delivered");
  clearTicketsActionState();
  renderTickets();
}

function toggleTicketsSidebar() {
  state.ticketsSidebarCollapsed = !state.ticketsSidebarCollapsed;
  renderTickets();
}

function toggleSousChefSidebar() {
  state.sousChefSidebarCollapsed = !state.sousChefSidebarCollapsed;
  renderSousChef();
}

function renderCategory(categoryData, isOpen, visibleItems, itemCount) {
  const dishesMarkup = isOpen
    ? `<div class="category-dishes">
        ${visibleItems
          .map(
            (dishName) => `
              <button
                class="dish-button"
                type="button"
                data-dish-name="${escapeHtml(dishName)}"
                data-category-name="${escapeHtml(categoryData.name)}"
              >${escapeHtml(dishName)}</button>`,
          )
          .join("")}
      </div>`
    : "";

  return `
    <section class="category-card">
      <button
        class="category-toggle"
        type="button"
        data-category-toggle="${escapeHtml(categoryData.name)}"
        aria-expanded="${isOpen ? "true" : "false"}"
      >
        <span class="category-toggle__name">
          <span class="category-toggle__label">${escapeHtml(categoryData.name)}</span>
          <span class="category-toggle__count">(${itemCount})</span>
        </span>
        <span class="category-toggle__meta">
          <span class="category-toggle__chevron" aria-hidden="true">
            ${buildChevronIconMarkup()}
          </span>
        </span>
      </button>
      ${dishesMarkup}
    </section>`;
}

function renderMenu() {
  const searchTerm = state.search.trim().toLowerCase();
  const hasSearch = searchTerm.length > 0;
  const orderIsShared = isSharedOrder(state.order);

  if (elements.menuTitle) {
    elements.menuTitle.textContent = `Table ${state.tableNumber} Order (Captain)`;
  }

  if (elements.menuSearch && elements.menuSearch.value !== state.search) {
    elements.menuSearch.value = state.search;
  }

  const visibleCategories = menuCategories
    .map((categoryData) => {
      const categoryMatches = categoryData.name.toLowerCase().includes(searchTerm);
      const matchingItems = categoryData.items.filter((dishName) =>
        dishName.toLowerCase().includes(searchTerm),
      );

      if (!hasSearch) {
        return {
          categoryData,
          visibleItems: categoryData.items,
          itemCount: categoryData.items.length,
          isOpen: state.expandedCategories.has(categoryData.name),
        };
      }

      if (!categoryMatches && matchingItems.length === 0) {
        return null;
      }

      return {
        categoryData,
        visibleItems: categoryMatches ? categoryData.items : matchingItems,
        itemCount: categoryMatches ? categoryData.items.length : matchingItems.length,
        isOpen: true,
      };
    })
    .filter(Boolean);

  if (elements.categoryList) {
    elements.categoryList.innerHTML = visibleCategories.length
      ? visibleCategories
          .map(({ categoryData, visibleItems, itemCount, isOpen }) =>
            renderCategory(categoryData, isOpen, visibleItems, itemCount),
          )
          .join("")
      : `<div class="empty-results">No matching items</div>`;
  }

  if (elements.orderEmpty) {
    elements.orderEmpty.hidden = state.order.length > 0;
    elements.orderEmpty.style.display = state.order.length > 0 ? "none" : "block";
  }

  if (elements.orderColumns) {
    elements.orderColumns.hidden = false;
    elements.orderColumns.style.display = state.order.length > 0 ? "flex" : "none";
    elements.orderColumns.innerHTML = state.order.length > 0 ? buildOrderColumnsMarkup() : "";
  }

  if (elements.orderList) {
    elements.orderList.hidden = state.order.length === 0;
    elements.orderList.style.display = state.order.length > 0 ? "flex" : "none";
    elements.orderList.innerHTML = state.order.length
      ? state.order
          .map(
            (item, index) => `
              <li class="order-item${
                index === state.editingOrderIndex ? " order-item--editing" : ""
              }" data-order-index="${index}">
                <div class="order-item__main">
                  <div class="order-item__name">${escapeHtml(item.dishName)}</div>
                  <div class="order-item__qty">${escapeHtml(String(item.quantity))}</div>
                  <button
                    class="order-item__edit"
                    type="button"
                    data-order-edit="${index}"
                    aria-label="Edit ${escapeHtml(item.dishName)}"
                  >${buildEditIconMarkup()}</button>
                </div>
                ${
                  item.note
                    ? `<div class="order-item__note-row">
                        <div class="order-item__note">${escapeHtml(item.note)}</div>
                      </div>`
                    : ""
                }
              </li>`,
          )
          .join("")
      : "";
  }

  if (elements.orderFooter) {
    elements.orderFooter.hidden = state.order.length === 0;
    elements.orderFooter.style.display = state.order.length > 0 ? "flex" : "none";
  }

  if (elements.orderNew) {
    elements.orderNew.hidden = state.order.length === 0;
  }

  if (elements.orderShare) {
    elements.orderShare.disabled = orderIsShared;
    elements.orderShare.textContent = orderIsShared ? "Shared" : "Share";
    elements.orderShare.classList.toggle("order-share--shared", orderIsShared);
    elements.orderShare.setAttribute("aria-disabled", orderIsShared ? "true" : "false");
  }

  persistCurrentOrder();
  syncDishPopup();
}

function getDishUnitPrice(categoryName) {
  const priceMap = {
    Soups: 220.36,
    Salads: 180,
    Starters: 330.5,
    Chaat: 140,
    Rolls: 150,
    Parathas: 120,
    Breads: 60,
    "Main Course": 330.5,
    "Dal Specials": 240,
    "Paneer Specials": 330.5,
    Rice: 100,
    Biryani: 350,
    Chinese: 220.36,
    Pizza: 280,
    Pasta: 260,
    Burgers: 180,
    Sandwiches: 150,
    Snacks: 140,
    Thalis: 320,
    Combos: 299,
    "Raita & Accompaniments": 90,
    Beverages: 100,
    "Lassi & Chaas": 100,
    Mocktails: 140,
    Shakes: 120,
    Desserts: 90,
    "Ice Creams": 80,
    "Traditional Sweets": 110,
    "Jain Food": 330.5,
    "Signature Specials": 350,
    "Family Packs": 1200,
    "Party Platters": 1800,
  };

  return priceMap[categoryName] ?? 180;
}

function getOrderItemUnitPrice(item) {
  return getDishUnitPrice(item?.categoryName);
}

function getOrderItemTotalPrice(item) {
  return getOrderItemUnitPrice(item) * (Number(item?.quantity) || 1);
}

function formatMoneyAmount(amount, { currency = false } = {}) {
  const safeAmount = Number.isFinite(amount) ? amount : 0;
  const hasFraction = Math.round(safeAmount * 100) % 100 !== 0;
  const formatted = safeAmount.toLocaleString("en-IN", {
    minimumFractionDigits: hasFraction ? 2 : 0,
    maximumFractionDigits: 2,
  });
  return currency ? `₹ ${formatted}` : formatted;
}

function formatElapsedTime(milliseconds) {
  const safeMilliseconds = Math.max(0, Math.floor(milliseconds));
  const totalSeconds = Math.floor(safeMilliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [hours, minutes, seconds].map((value) => String(value).padStart(2, "0")).join(":");
}

function buildBillRowsMarkup() {
  return state.order
    .map((item, index) => {
      const receivedAt = Number.isFinite(item.receivedAt) ? item.receivedAt : Date.now();
      const elapsedTime = getOrderItemElapsedTime(item, receivedAt);
      const isEditing = index === state.editingOrderIndex;
      const acceptanceState = item.acceptance === "out"
        ? "out"
        : item.acceptance === "delivered"
          ? "delivered"
          : item.acceptance === "rejected"
          ? "rejected"
          : "pending";
      const itemClassName = [
        "bill-item",
        isEditing ? "bill-item--editing" : "",
        acceptanceState === "out" ? "bill-item--out" : "",
        acceptanceState === "delivered" ? "bill-item--delivered" : "",
        acceptanceState === "rejected" ? "bill-item--rejected" : "",
      ]
        .filter(Boolean)
        .join(" ");

      const acceptanceMarkup =
        acceptanceState === "delivered"
          ? `
            <div class="bill-item__acceptance bill-item__acceptance--delivered">
              <div class="bill-item__status bill-item__status--delivered">
                Delivered
              </div>
            </div>`
          : acceptanceState === "out"
          ? `
            <div class="bill-item__acceptance bill-item__acceptance--out">
              <div class="bill-item__status bill-item__status--out" data-bill-delivery-open="${index}" aria-label="Out ${escapeHtml(
                item.dishName,
              )}">
                Out
              </div>
            </div>`
          : acceptanceState === "rejected"
            ? `
            <div class="bill-item__acceptance bill-item__acceptance--rejected">
              <div class="bill-item__status bill-item__status--rejected" data-bill-reset="${index}" aria-label="Reset ${escapeHtml(
                item.dishName,
              )}">
                <img class="bill-item__status-image" src="./Refresh.png" alt="" aria-hidden="true" />
              </div>
            </div>`
            : `
            <div class="bill-item__acceptance">
              <button
                class="bill-item__accept bill-item__accept--reject"
                type="button"
                data-bill-reject="${index}"
                aria-label="Reject ${escapeHtml(item.dishName)}"
              >×</button>
              <button
                class="bill-item__accept bill-item__accept--accept"
                type="button"
                data-bill-accept="${index}"
                aria-label="Accept ${escapeHtml(item.dishName)}"
              >✓</button>
            </div>`;

      return `
        <li class="${itemClassName}" data-bill-index="${index}" data-bill-start="${receivedAt}">
          <div class="bill-item__main">
            <div class="bill-item__name">
              <span class="bill-item__index">${escapeHtml(`${index + 1}.`)}</span>
              <span class="bill-item__dish">${escapeHtml(item.dishName)}</span>
            </div>
            <div class="bill-item__qty">${escapeHtml(String(item.quantity))}</div>
            ${acceptanceMarkup}
            <div class="bill-item__time" data-bill-time>${escapeHtml(elapsedTime)}</div>
          </div>
          ${
            item.note
              ? `<div class="bill-item__note-row">
                  <div class="bill-item__note">${escapeHtml(item.note)}</div>
                </div>`
              : ""
          }
        </li>`;
    })
    .join("");
}

function computeBillDeliveryPopupPosition(anchorElement) {
  if (!anchorElement) return null;

  const anchorRect = anchorElement.getBoundingClientRect();
  const popupWidth = Math.min(274, Math.max(0, window.innerWidth - 24));
  const popupHeight = 120;
  const gap = 12;
  const margin = 12;

  const spaceOnRight = window.innerWidth - anchorRect.right - gap - margin;
  const canFitOnRight = spaceOnRight >= popupWidth;

  let left = canFitOnRight
    ? anchorRect.right + gap
    : anchorRect.left - gap - popupWidth;

  left = Math.max(margin, Math.min(left, window.innerWidth - popupWidth - margin));

  let top = anchorRect.top - 8;
  top = Math.max(margin, Math.min(top, window.innerHeight - popupHeight - margin));

  return {
    left: Math.round(left),
    top: Math.round(top),
  };
}

function syncBillDeliveryPopup() {
  if (!elements.billDeliveryPopup) return;

  const activeIndex = Number.isInteger(state.billDeliveryPromptIndex)
    ? state.billDeliveryPromptIndex
    : null;
  const activeOrderItem = activeIndex !== null ? state.order[activeIndex] : null;
  const shouldShowPopup = activeOrderItem?.acceptance === "out";

  elements.billDeliveryPopup.hidden = !shouldShowPopup;
  elements.billDeliveryPopup.setAttribute("aria-hidden", shouldShowPopup ? "false" : "true");

  if (shouldShowPopup && state.billDeliveryPopupPosition) {
    elements.billDeliveryPopup.style.left = `${state.billDeliveryPopupPosition.left}px`;
    elements.billDeliveryPopup.style.top = `${state.billDeliveryPopupPosition.top}px`;
  } else {
    elements.billDeliveryPopup.style.left = "";
    elements.billDeliveryPopup.style.top = "";
  }
}

function openBillDeliveryPopup(index, anchorElement) {
  if (!Number.isInteger(index) || index < 0 || index >= state.order.length) return;
  if (state.order[index].acceptance !== "out") return;

  state.billDeliveryPromptIndex = index;
  state.billDeliveryPopupPosition = computeBillDeliveryPopupPosition(anchorElement);
  renderBill();
}

function closeBillDeliveryPopup() {
  if (state.billDeliveryPromptIndex === null) return;
  state.billDeliveryPromptIndex = null;
  state.billDeliveryPopupPosition = null;
  syncBillDeliveryPopup();
}

function confirmBillDeliveryPopup() {
  const activeIndex = state.billDeliveryPromptIndex;
  if (!Number.isInteger(activeIndex) || activeIndex < 0 || activeIndex >= state.order.length) {
    closeBillDeliveryPopup();
    return;
  }

  const activeOrderItem = state.order[activeIndex];
  if (activeOrderItem?.acceptance === "out") {
    activeOrderItem.acceptance = "delivered";
    activeOrderItem.deliveredAt = Date.now();
    persistCurrentOrder();
    state.billDeliveryPromptIndex = null;
    state.billDeliveryPopupPosition = null;
    const allOrdersDelivered =
      state.order.length > 0 && state.order.every((item) => item.acceptance === "delivered");
    if (allOrdersDelivered) {
      goToChefTableOverview();
      return;
    }

    renderBill();
  } else {
    closeBillDeliveryPopup();
  }
}

function renderBill() {
  if (elements.billTitle) {
    elements.billTitle.textContent = `Table ${state.tableNumber} Order (Bill)`;
  }

  const hasOrder = state.order.length > 0;

  if (elements.billEmpty) {
    elements.billEmpty.hidden = hasOrder;
  }

  if (elements.billFilled) {
    elements.billFilled.hidden = !hasOrder;
  }

  if (!hasOrder) {
    if (elements.billList) {
      elements.billList.innerHTML = "";
    }

    state.billDeliveryPromptIndex = null;
    state.billDeliveryPopupPosition = null;
    persistCurrentOrder();
    syncDishPopup();
    syncBillDeliveryPopup();
    return;
  }

  if (elements.billList) {
    elements.billList.innerHTML = buildBillRowsMarkup();
  }

  persistCurrentOrder();
  syncDishPopup();
  syncBillDeliveryPopup();
  updateBillTimers();
}

function updateBillTimers() {
  if (!elements.billList) return;

  const now = Date.now();

  elements.billList.querySelectorAll("[data-bill-time]").forEach((timeElement) => {
    const billItem = timeElement.closest("[data-bill-index]");
    if (!billItem) return;

    const itemIndex = Number(billItem.dataset.billIndex);
    const orderItem = state.order[itemIndex];
    const receivedAt = Number.isFinite(orderItem?.receivedAt) ? orderItem.receivedAt : now;
    const stoppedAt = getOrderItemTimerStopAt(orderItem);
    timeElement.textContent = formatElapsedTime((Number.isFinite(stoppedAt) ? stoppedAt : now) - receivedAt);
  });
}

function buildCaptainBillRowsMarkup() {
  return state.order
    .map((item, index) => {
      const unitPrice = getOrderItemUnitPrice(item);
      const totalPrice = getOrderItemTotalPrice(item);
      const isEditing = index === state.editingOrderIndex;

      return `
        <li class="captain-bill__item${isEditing ? " captain-bill__item--editing" : ""}" data-captain-bill-index="${index}">
          <div class="captain-bill__item-main">
            <div class="captain-bill__item-name">
              <span class="captain-bill__item-index">${escapeHtml(`${index + 1}.`)}</span>
              <span class="captain-bill__item-dish">${escapeHtml(item.dishName)}</span>
            </div>
            <div class="captain-bill__item-qty">${escapeHtml(String(item.quantity))}</div>
            <div class="captain-bill__item-unit">${escapeHtml(formatMoneyAmount(unitPrice))}</div>
            <button
              class="captain-bill__item-edit"
              type="button"
              data-captain-bill-edit="${index}"
              aria-label="Edit ${escapeHtml(item.dishName)}"
            >${buildEditIconMarkup()}</button>
            <div class="captain-bill__item-total">${escapeHtml(formatMoneyAmount(totalPrice))}</div>
          </div>
          ${
            item.note
              ? `<div class="captain-bill__item-note-row">
                  <div class="captain-bill__item-note">${escapeHtml(item.note)}</div>
                </div>`
              : ""
          }
        </li>`;
    })
    .join("");
}

function buildCaptainBillTotalMarkup() {
  const totalQuantity = state.order.reduce((sum, item) => sum + (Number(item.quantity) || 1), 0);
  const totalAmount = state.order.reduce((sum, item) => sum + getOrderItemTotalPrice(item), 0);

  return `
    <div class="captain-bill__total-items">Total</div>
    <div class="captain-bill__total-qty">${escapeHtml(String(totalQuantity))}</div>
    <div class="captain-bill__total-unit" aria-hidden="true"></div>
    <div class="captain-bill__total-edit" aria-hidden="true"></div>
    <div class="captain-bill__total-amount">${escapeHtml(formatMoneyAmount(totalAmount, { currency: true }))}</div>
  `;
}

function renderCaptainBill() {
  if (elements.captainBillTitle) {
    elements.captainBillTitle.textContent = `Table ${state.tableNumber} Order (Bill)`;
  }

  const hasOrder = state.order.length > 0;

  if (elements.captainBillEmpty) {
    elements.captainBillEmpty.hidden = hasOrder;
  }

  if (elements.captainBillFilled) {
    elements.captainBillFilled.hidden = !hasOrder;
  }

  if (elements.captainBillList) {
    elements.captainBillList.innerHTML = hasOrder ? buildCaptainBillRowsMarkup() : "";
  }

  if (elements.captainBillTotal) {
    elements.captainBillTotal.innerHTML = hasOrder ? buildCaptainBillTotalMarkup() : "";
  }

  persistCurrentOrder();
  syncDishPopup();
}

function getCaptainDeliveryItemState(item, index) {
  if (Number.isFinite(item?.captainDeliveredAt)) return "confirmed";
  if (index === state.captainDeliveryPromptIndex) return "prompting";
  if (item?.acceptance === "delivered") return "ready";
  if (item?.acceptance === "out" || item?.acceptance === "accepted") return "out";
  return "pending";
}

function buildCaptainDeliveryActionMarkup(item, index, deliveryState) {
  if (deliveryState === "confirmed") {
    return `<div class="captain-delivery__delivered-label">Delivered</div>`;
  }

  const isReady = deliveryState === "ready" || deliveryState === "prompting";

  return `
    <button
      class="captain-delivery__check${isReady ? " captain-delivery__check--ready" : " captain-delivery__check--muted"}"
      type="button"
      data-captain-delivery-confirm="${index}"
      aria-label="Mark ${escapeHtml(item.dishName)} delivered"
      ${isReady ? "" : "disabled"}
    >✓</button>`;
}

function buildCaptainDeliveryRowsMarkup() {
  return state.order
    .map((item, index) => {
      const receivedAt = Number.isFinite(item.receivedAt) ? item.receivedAt : Date.now();
      const stoppedAt = getOrderItemTimerStopAt(item);
      const elapsedTime = getOrderItemElapsedTime(item, receivedAt);
      const deliveryState = getCaptainDeliveryItemState(item, index);
      const itemClassName = [
        "captain-delivery__item",
        `captain-delivery__item--${deliveryState}`,
      ].join(" ");

      return `
        <li
          class="${itemClassName}"
          data-captain-delivery-index="${index}"
          data-captain-delivery-start="${escapeHtml(String(receivedAt))}"
          data-captain-delivery-stop="${Number.isFinite(stoppedAt) ? escapeHtml(String(stoppedAt)) : ""}"
        >
          <div class="captain-delivery__item-main">
            <div class="captain-delivery__item-name">
              <span class="captain-delivery__item-index">${escapeHtml(`${index + 1}.`)}</span>
              <span class="captain-delivery__item-dish">${escapeHtml(item.dishName)}</span>
            </div>
            <div class="captain-delivery__item-qty">${escapeHtml(String(item.quantity))}</div>
            <div class="captain-delivery__item-action">
              ${buildCaptainDeliveryActionMarkup(item, index, deliveryState)}
            </div>
            <div class="captain-delivery__item-time" data-captain-delivery-time>${escapeHtml(elapsedTime)}</div>
          </div>
          ${
            item.note
              ? `<div class="captain-delivery__item-note-row">
                  <div class="captain-delivery__item-note">${escapeHtml(item.note)}</div>
                </div>`
              : ""
          }
        </li>`;
    })
    .join("");
}

function renderCaptainDelivery() {
  if (elements.captainDeliveryTitle) {
    elements.captainDeliveryTitle.textContent = `Table ${state.tableNumber} Order (Delivery to the Table)`;
  }

  const hasOrder = state.order.length > 0;

  if (elements.captainDeliveryEmpty) {
    elements.captainDeliveryEmpty.hidden = hasOrder;
  }

  if (elements.captainDeliveryFilled) {
    elements.captainDeliveryFilled.hidden = !hasOrder;
  }

  if (elements.captainDeliveryList) {
    elements.captainDeliveryList.innerHTML = hasOrder ? buildCaptainDeliveryRowsMarkup() : "";
  }

  persistCurrentOrder();
  syncDishPopup();
  syncCaptainDeliveryPopup();
  updateCaptainDeliveryTimers();
}

function updateCaptainDeliveryTimers() {
  if (!elements.captainDeliveryList) return;

  const now = Date.now();

  elements.captainDeliveryList.querySelectorAll("[data-captain-delivery-time]").forEach((timeElement) => {
    const rowElement = timeElement.closest("[data-captain-delivery-index]");
    const itemIndex = Number(rowElement?.dataset.captainDeliveryIndex);
    const orderItem = state.order[itemIndex];
    const receivedAt = Number.isFinite(orderItem?.receivedAt) ? orderItem.receivedAt : now;
    const stoppedAt = getOrderItemTimerStopAt(orderItem);
    timeElement.textContent = formatElapsedTime((Number.isFinite(stoppedAt) ? stoppedAt : now) - receivedAt);
  });
}

function computeCaptainDeliveryPopupPosition(anchorElement) {
  if (!anchorElement) return null;

  const anchorRect = anchorElement.getBoundingClientRect();
  const popupWidth = 274;
  const popupHeight = 92;
  const gap = 12;
  const margin = 12;

  let left = anchorRect.right + gap;
  if (left + popupWidth > window.innerWidth - margin) {
    left = anchorRect.left - gap - popupWidth;
  }

  left = Math.max(margin, Math.min(left, window.innerWidth - popupWidth - margin));

  let top = anchorRect.top - 20;
  top = Math.max(margin, Math.min(top, window.innerHeight - popupHeight - margin));

  return {
    left: Math.round(left),
    top: Math.round(top),
  };
}

function syncCaptainDeliveryPopup() {
  if (!elements.captainDeliveryPopup) return;

  const activeIndex = Number.isInteger(state.captainDeliveryPromptIndex)
    ? state.captainDeliveryPromptIndex
    : null;
  const activeOrderItem = activeIndex !== null ? state.order[activeIndex] : null;
  const shouldShowPopup =
    state.page === "captain-delivery" &&
    activeOrderItem?.acceptance === "delivered" &&
    !Number.isFinite(activeOrderItem.captainDeliveredAt);

  elements.captainDeliveryPopup.hidden = !shouldShowPopup;
  elements.captainDeliveryPopup.setAttribute("aria-hidden", shouldShowPopup ? "false" : "true");

  if (shouldShowPopup && state.captainDeliveryPopupPosition) {
    elements.captainDeliveryPopup.style.left = `${state.captainDeliveryPopupPosition.left}px`;
    elements.captainDeliveryPopup.style.top = `${state.captainDeliveryPopupPosition.top}px`;
  } else {
    elements.captainDeliveryPopup.style.left = "";
    elements.captainDeliveryPopup.style.top = "";
  }
}

function openCaptainDeliveryPopup(index, anchorElement) {
  if (!Number.isInteger(index) || index < 0 || index >= state.order.length) return;

  const orderItem = state.order[index];
  if (orderItem.acceptance !== "delivered" || Number.isFinite(orderItem.captainDeliveredAt)) return;

  state.captainDeliveryPromptIndex = index;
  state.captainDeliveryPopupPosition = computeCaptainDeliveryPopupPosition(anchorElement);
  renderCaptainDelivery();
}

function closeCaptainDeliveryPopup() {
  if (state.captainDeliveryPromptIndex === null) return;
  state.captainDeliveryPromptIndex = null;
  state.captainDeliveryPopupPosition = null;
  renderCaptainDelivery();
}

function confirmCaptainDeliveryPopup() {
  const activeIndex = state.captainDeliveryPromptIndex;
  if (!Number.isInteger(activeIndex)) {
    closeCaptainDeliveryPopup();
    return;
  }

  markCaptainDeliveryItem(activeIndex);
}

function markCaptainDeliveryItem(index) {
  if (!Number.isInteger(index) || index < 0 || index >= state.order.length) return;

  const orderItem = state.order[index];
  if (orderItem.acceptance !== "delivered") return;

  orderItem.acceptance = "delivered";
  orderItem.deliveredAt = Number.isFinite(orderItem.deliveredAt) ? orderItem.deliveredAt : Date.now();
  orderItem.outAt = Number.isFinite(orderItem.outAt) ? orderItem.outAt : orderItem.deliveredAt;
  orderItem.rejectedAt = null;
  orderItem.captainDeliveredAt = Number.isFinite(orderItem.captainDeliveredAt)
    ? orderItem.captainDeliveredAt
    : Date.now();
  state.captainDeliveryPromptIndex = null;
  state.captainDeliveryPopupPosition = null;
  persistCurrentOrder();
  renderCaptainDelivery();
  renderCaptain();
  renderSousChef();
  renderTickets();
}

function renderCaptain() {
  if (!elements.captainTableGrid) return;

  elements.captainTableGrid.querySelectorAll(".table-tile").forEach((button) => {
    const tableNumber = Number(button.textContent.trim());
    if (!Number.isFinite(tableNumber)) return;
    applyTableVisualState(button, getTableVisualState(tableNumber), tableNumber);
  });
}

function renderSousChef() {
  if (!elements.sousChefTableGrid) return;

  if (elements.sousChefShell) {
    elements.sousChefShell.classList.toggle(
      "sous-chef-shell--collapsed",
      state.sousChefSidebarCollapsed,
    );
  }

  if (elements.sousChefSidebar) {
    elements.sousChefSidebar.hidden = state.sousChefSidebarCollapsed;
    elements.sousChefSidebar.setAttribute(
      "aria-hidden",
      state.sousChefSidebarCollapsed ? "true" : "false",
    );
  }

  if (elements.sousChefCollapseToggle) {
    elements.sousChefCollapseToggle.setAttribute(
      "aria-label",
      state.sousChefSidebarCollapsed ? "Expand table overview sidebar" : "Collapse table overview sidebar",
    );
    elements.sousChefCollapseToggle.setAttribute(
      "aria-expanded",
      state.sousChefSidebarCollapsed ? "false" : "true",
    );
  }

  if (elements.sousChefCollapseIcon) {
    elements.sousChefCollapseIcon.src = state.sousChefSidebarCollapsed ? "./Expand.png" : "./Collapse.png";
  }

  elements.sousChefTableGrid.querySelectorAll(".table-tile").forEach((button) => {
    const tableNumber = Number(button.textContent.trim());
    if (!Number.isFinite(tableNumber)) return;
    applyTableVisualState(button, getTableVisualState(tableNumber, { publishedOnly: true }), tableNumber);
  });

  const liveCategoryNames = getLiveCategoryNames(getActiveTicketData());

  if (elements.sousChefLiveCategories) {
    elements.sousChefLiveCategories.hidden = liveCategoryNames.length === 0;
    elements.sousChefLiveCategories.style.display = liveCategoryNames.length > 0 ? "flex" : "none";
    elements.sousChefLiveCategories.innerHTML = liveCategoryNames
      .map(
        (categoryName) => `
          <button
            class="sous-chef-sidebar__row sous-chef-sidebar__row--dark"
            type="button"
            data-sous-chef-category-select="${escapeHtml(categoryName)}"
            aria-label="Open ${escapeHtml(categoryName)} tickets"
          >
            ${escapeHtml(categoryName)}
          </button>`,
      )
      .join("");
  }

  if (elements.sousChefLiveEmpty) {
    elements.sousChefLiveEmpty.hidden = liveCategoryNames.length > 0;
    elements.sousChefLiveEmpty.style.display = liveCategoryNames.length > 0 ? "none" : "flex";
  }

  const activeTickets = getActiveTicketData();
  if (elements.sousChefTicketsRow) {
    elements.sousChefTicketsRow.textContent = `Tickets (${activeTickets.length})`;
  }
}

function renderTickets() {
  const activeTickets = getActiveTicketData();
  const isCollapsed = state.ticketsSidebarCollapsed;
  const availableCategories = getLiveCategoryNames(activeTickets);
  const isCategoryView = state.ticketsViewMode === "category";
  const selectedCategory = isCategoryView
    ? availableCategories.find(
        (categoryName) =>
          normalizeTicketCategoryName(categoryName) ===
          normalizeTicketCategoryName(state.ticketsSelectedCategory),
      ) || availableCategories[0] || null
    : null;

  if (state.ticketsSelectedCategory !== selectedCategory) {
    state.ticketsSelectedCategory = selectedCategory;
  }
  const selectedCategoryTicket = selectedCategory
    ? getCategoryTicketData(activeTickets, selectedCategory)
    : null;

  if (elements.ticketsCount) {
    elements.ticketsCount.textContent = `Tickets (${activeTickets.length})`;
  }

  if (elements.ticketsCountRow) {
    elements.ticketsCountRow.classList.toggle("tickets-sidebar__row--selected", !isCategoryView);
    elements.ticketsCountRow.setAttribute("aria-current", !isCategoryView ? "true" : "false");
  }

  if (elements.ticketsShell) {
    elements.ticketsShell.classList.toggle("tickets-shell--collapsed", isCollapsed);
  }

  if (elements.ticketsSidebar) {
    elements.ticketsSidebar.hidden = isCollapsed;
    elements.ticketsSidebar.setAttribute("aria-hidden", isCollapsed ? "true" : "false");
  }

  if (elements.ticketsCollapseToggle) {
    elements.ticketsCollapseToggle.setAttribute(
      "aria-label",
      isCollapsed ? "Expand tickets overview" : "Collapse tickets overview",
    );
    elements.ticketsCollapseToggle.setAttribute("aria-expanded", isCollapsed ? "false" : "true");
  }

  if (elements.ticketsCollapseIcon) {
    elements.ticketsCollapseIcon.src = isCollapsed ? "./Expand.png" : "./Collapse.png";
  }

  if (elements.ticketsList) {
    elements.ticketsList.classList.toggle("tickets-list--overview", !isCategoryView);
    elements.ticketsList.classList.toggle("tickets-list--category", isCategoryView);
    elements.ticketsList.innerHTML = !activeTickets.length
      ? ""
      : isCategoryView && selectedCategoryTicket && selectedCategory
        ? buildTicketCardMarkup(selectedCategoryTicket, selectedCategory)
        : activeTickets.map((ticketData) => buildTicketOverviewCardMarkup(ticketData)).join("");
  }

  if (elements.ticketsEmpty) {
    const shouldShowTicketsEmpty = activeTickets.length === 0;
    elements.ticketsEmpty.hidden = !shouldShowTicketsEmpty;
    elements.ticketsEmpty.style.display = shouldShowTicketsEmpty ? "flex" : "none";
    elements.ticketsEmpty.textContent = shouldShowTicketsEmpty ? "NA" : "";
    elements.ticketsEmpty.classList.toggle("tickets-empty--overview", !isCategoryView);
  }

  if (elements.ticketsLiveCategories) {
    if (isCollapsed) {
      elements.ticketsLiveCategories.hidden = true;
      elements.ticketsLiveCategories.style.display = "none";
      elements.ticketsLiveCategories.innerHTML = "";
    } else {
      elements.ticketsLiveCategories.hidden = availableCategories.length === 0;
      elements.ticketsLiveCategories.style.display = availableCategories.length > 0 ? "flex" : "none";
      elements.ticketsLiveCategories.innerHTML = availableCategories
        .map(
          (categoryName) => {
            const isSelectedCategory = isCategoryView && categoryName === selectedCategory;
            return `
              <button
                class="tickets-sidebar__row tickets-sidebar__row--category${
                  isSelectedCategory ? " tickets-sidebar__row--selected" : " tickets-sidebar__row--dark"
                }"
                type="button"
                data-ticket-category-select="${escapeHtml(categoryName)}"
                aria-current="${isSelectedCategory ? "true" : "false"}"
              >
                ${
                  isSelectedCategory
                    ? '<span class="tickets-sidebar__icon tickets-sidebar__icon--category" aria-hidden="true">‹</span>'
                    : ""
                }
                <span class="tickets-sidebar__category-label">${escapeHtml(categoryName)}</span>
              </button>`;
          },
        )
        .join("");
    }
  }

  if (elements.ticketsLiveEmpty) {
    const shouldShowLiveEmpty = activeTickets.length === 0 && availableCategories.length === 0;

    if (isCollapsed) {
      elements.ticketsLiveEmpty.hidden = true;
      elements.ticketsLiveEmpty.style.display = "none";
      elements.ticketsLiveEmpty.textContent = "";
    } else {
      elements.ticketsLiveEmpty.hidden = !shouldShowLiveEmpty;
      elements.ticketsLiveEmpty.style.display = shouldShowLiveEmpty ? "flex" : "none";
      elements.ticketsLiveEmpty.textContent = shouldShowLiveEmpty ? "NA" : "";
    }
  }

  syncTicketsActionPopup();
  updateTicketTimers();
}

function updateTicketTimers() {
  if (!elements.ticketsList) return;

  const now = Date.now();

  elements.ticketsList.querySelectorAll("[data-ticket-header-time]").forEach((timeElement) => {
    const ticketCard = timeElement.closest("[data-ticket-table]");
    const tableNumber = Number(ticketCard?.dataset.ticketTable);
    if (!Number.isFinite(tableNumber)) return;

    const ticketData = getTicketDataForOrder(tableNumber, getTicketOrderItems(tableNumber));
    if (!ticketData) return;

    timeElement.textContent = formatElapsedTime(now - ticketData.receivedAt);
  });

  elements.ticketsList.querySelectorAll("[data-ticket-time]").forEach((timeElement) => {
    const ticketRow = timeElement.closest("[data-ticket-item-start]");
    const receivedAt = Number(ticketRow?.dataset.ticketItemStart);
    const stoppedAt = Number(ticketRow?.dataset.ticketItemStop);
    if (!Number.isFinite(receivedAt)) return;

    timeElement.textContent = formatElapsedTime((Number.isFinite(stoppedAt) ? stoppedAt : now) - receivedAt);
  });
}

function renderActiveOrderView() {
  if (state.page === "bill") {
    renderBill();
    return;
  }

  if (state.page === "captain-bill") {
    renderCaptainBill();
    return;
  }

  if (state.page === "captain-delivery") {
    renderCaptainDelivery();
    return;
  }

  if (state.page === "tickets") {
    renderTickets();
    return;
  }

  if (state.page === "menu") {
    renderMenu();
    return;
  }

  if (state.page === "sous-chef") {
    renderSousChef();
  }
}

function syncRoute() {
  const route = parseRoute();
  const previousPage = state.page;
  const previousTableNumber = state.tableNumber;
  const wasOrderRoute = isOrderRoute(previousPage);
  const willBeOrderRoute = isOrderRoute(route.page);

  if (wasOrderRoute && (previousPage !== route.page || previousTableNumber !== route.tableNumber)) {
    persistCurrentOrder();
  }

  state.page = route.page;

  if (willBeOrderRoute) {
    state.tableNumber = route.tableNumber;
    state.search = "";
    state.expandedCategories = new Set();
    state.selectedDish = null;
    state.selectedDishQuantity = 1;
    state.selectedDishNote = "";
    state.selectedDishReceivedAt = null;
    state.ticketsActionTableNumber = null;
    state.ticketsActionIndex = null;
    state.ticketsActionMode = null;
    state.ticketsActionPopupPosition = null;
    state.captainDeliveryPromptIndex = null;
    state.captainDeliveryPopupPosition = null;
    state.billDeliveryPromptIndex = null;
    state.billDeliveryPopupPosition = null;
    state.editingOrderIndex = null;
    loadOrderForTable(route.tableNumber);
  } else {
    state.selectedDish = null;
    state.selectedDishQuantity = 1;
    state.selectedDishNote = "";
    state.selectedDishReceivedAt = null;
    state.ticketsActionTableNumber = null;
    state.ticketsActionIndex = null;
    state.ticketsActionMode = null;
    state.ticketsActionPopupPosition = null;
    state.captainDeliveryPromptIndex = null;
    state.captainDeliveryPopupPosition = null;
    state.billDeliveryPromptIndex = null;
    state.billDeliveryPopupPosition = null;
    state.editingOrderIndex = null;
    if (wasOrderRoute) {
      state.order = [];
    }
  }

  showPage(route.page);
  syncDishPopup();

  if (route.page === "menu") {
    renderMenu();
  } else if (route.page === "bill") {
    renderBill();
  } else if (route.page === "captain-bill") {
    renderCaptainBill();
  } else if (route.page === "captain-delivery") {
    renderCaptainDelivery();
  } else if (route.page === "tickets") {
    renderTickets();
  } else if (route.page === "sous-chef") {
    renderSousChef();
  } else if (route.page === "captain") {
    renderCaptain();
  }
}

for (const button of elements.navButtons) {
  button.addEventListener("click", () => {
    const target = button.dataset.nav;
    if (target === "tickets") {
      state.ticketsViewMode = "overview";
      state.ticketsSelectedCategory = null;
    } else if (target === "sous-chef") {
      goToChefTableOverview();
      return;
    }
    setRoute(target === "home" ? "home" : target, state.tableNumber);
  });
}

for (const button of elements.tableButtons) {
  button.addEventListener("click", () => {
    const tableNumber = Number(button.textContent.trim());

    if (state.page === "sous-chef") {
      const hasOrder = Boolean(state.tableOrders.get(tableNumber)?.length);
      if (hasOrder) {
        setRoute("bill", tableNumber);
      }
      return;
    }

    setRoute(state.page === "cashier" ? "bill" : "menu", tableNumber);
  });
}

if (elements.menuSearch) {
  elements.menuSearch.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderMenu();
  });
}

if (elements.categoryList) {
  elements.categoryList.addEventListener("click", (event) => {
    const toggleButton = event.target.closest("[data-category-toggle]");
    if (toggleButton) {
      toggleCategory(toggleButton.dataset.categoryToggle);
      return;
    }

    const dishButton = event.target.closest("[data-dish-name]");
    if (dishButton) {
      openDishPopup(dishButton.dataset.categoryName, dishButton.dataset.dishName);
    }
  });
}

if (elements.orderList) {
  elements.orderList.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-order-edit]");
    if (!editButton) return;
    editOrderItem(Number(editButton.dataset.orderEdit));
  });
}

if (elements.orderShare) {
  elements.orderShare.addEventListener("click", shareOrder);
}

if (elements.orderBill) {
  elements.orderBill.addEventListener("click", () => {
    persistCurrentOrder();
    setRoute("captain-bill", state.tableNumber);
  });
}

if (elements.orderDelivered) {
  elements.orderDelivered.addEventListener("click", () => {
    persistCurrentOrder();
    setRoute("captain-delivery", state.tableNumber);
  });
}

if (elements.orderNew) {
  elements.orderNew.addEventListener("click", startNewOrder);
}

if (elements.captainBillList) {
  elements.captainBillList.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-captain-bill-edit]");
    if (!editButton) return;
    editOrderItem(Number(editButton.dataset.captainBillEdit));
  });
}

if (elements.captainBillPrint) {
  elements.captainBillPrint.addEventListener("click", () => {
    window.print();
  });
}

if (elements.captainDeliveryList) {
  elements.captainDeliveryList.addEventListener("click", (event) => {
    const confirmButton = event.target.closest("[data-captain-delivery-confirm]");
    if (!confirmButton) return;
    openCaptainDeliveryPopup(Number(confirmButton.dataset.captainDeliveryConfirm), confirmButton);
  });
}

if (elements.captainDeliveryPopup) {
  elements.captainDeliveryPopup.addEventListener("click", (event) => {
    if (
      event.target === elements.captainDeliveryPopup ||
      event.target.closest("[data-captain-delivery-popup-close]")
    ) {
      closeCaptainDeliveryPopup();
      return;
    }

    if (event.target.closest("[data-captain-delivery-popup-yes]")) {
      confirmCaptainDeliveryPopup();
    }
  });
}

if (elements.ticketsLiveCategories) {
  elements.ticketsLiveCategories.addEventListener("click", (event) => {
    const categoryButton = event.target.closest("[data-ticket-category-select]");
    if (!categoryButton) return;

    const categoryName = categoryButton.dataset.ticketCategorySelect;
    if (!categoryName) return;

    clearTicketsActionState();
    state.ticketsViewMode = "category";
    state.ticketsSelectedCategory = categoryName;
    renderTickets();
  });
}

if (elements.ticketsCountRow) {
  elements.ticketsCountRow.addEventListener("click", () => {
    clearTicketsActionState();
    state.ticketsViewMode = "overview";
    state.ticketsSelectedCategory = null;
    renderTickets();
  });
}

if (elements.ticketsTablesRow) {
  elements.ticketsTablesRow.addEventListener("click", () => {
    goToChefTableOverview();
  });
}

if (elements.sousChefLiveCategories) {
  elements.sousChefLiveCategories.addEventListener("click", (event) => {
    const categoryButton = event.target.closest("[data-sous-chef-category-select]");
    if (!categoryButton) return;

    const categoryName = categoryButton.dataset.sousChefCategorySelect;
    if (!categoryName) return;

    clearTicketsActionState();
    state.ticketsViewMode = "category";
    state.ticketsSelectedCategory = categoryName;
    state.ticketsSidebarCollapsed = false;

    setRoute("tickets");
  });
}

if (elements.ticketsList) {
  elements.ticketsList.addEventListener("click", (event) => {
    const overviewEditButton = event.target.closest("[data-ticket-overview-edit]");
    if (overviewEditButton) {
      openTicketsActionPopup(
        Number(overviewEditButton.dataset.ticketTable),
        Number(overviewEditButton.dataset.ticketOverviewEdit),
        "acceptance",
        overviewEditButton,
      );
      return;
    }

    const overviewCard = event.target.closest(".ticket-card--overview");
    if (
      overviewCard &&
      state.ticketsViewMode === "overview" &&
      !event.target.closest(
        "button, [data-ticket-accept], [data-ticket-reject], [data-ticket-deliver], [data-ticket-reset]",
      )
    ) {
      goToChefTableOverview();
      return;
    }

    const rejectButton = event.target.closest("[data-ticket-reject]");
    if (rejectButton) {
      clearTicketsActionState();
      setTicketAcceptance(Number(rejectButton.dataset.ticketTable), Number(rejectButton.dataset.ticketReject), "rejected");
      renderTickets();
      return;
    }

    const acceptButton = event.target.closest("[data-ticket-accept]");
    if (acceptButton) {
      clearTicketsActionState();
      setTicketAcceptance(Number(acceptButton.dataset.ticketTable), Number(acceptButton.dataset.ticketAccept), "out");
      renderTickets();
      return;
    }

    const deliverButton = event.target.closest("[data-ticket-deliver]");
    if (deliverButton) {
      openTicketsActionPopup(
        Number(deliverButton.dataset.ticketTable),
        Number(deliverButton.dataset.ticketDeliver),
        "delivery",
        deliverButton,
      );
      return;
    }

    const resetButton = event.target.closest("[data-ticket-reset]");
    if (!resetButton) return;

    clearTicketsActionState();
    const tableNumber = Number(resetButton.dataset.ticketTable);
    const itemIndex = Number(resetButton.dataset.ticketReset);
    setTicketAcceptance(tableNumber, itemIndex, null);
    renderTickets();
  });
}

if (elements.ticketsCollapseToggle) {
  elements.ticketsCollapseToggle.addEventListener("click", toggleTicketsSidebar);
}

if (elements.sousChefCollapseToggle) {
  elements.sousChefCollapseToggle.addEventListener("click", toggleSousChefSidebar);
}

if (elements.ticketsActionPopup) {
  elements.ticketsActionPopup.addEventListener("click", (event) => {
    if (event.target === elements.ticketsActionPopup || event.target.closest("[data-tickets-action-close]")) {
      closeTicketsActionPopup();
      return;
    }

    if (event.target.closest("[data-tickets-action-reject]")) {
      applyTicketsAcceptance("rejected");
      return;
    }

    if (event.target.closest("[data-tickets-action-accept]")) {
      applyTicketsAcceptance("out");
      return;
    }

    if (event.target.closest("[data-tickets-action-yes]")) {
      confirmTicketsDelivery();
    }
  });
}

if (elements.billList) {
  elements.billList.addEventListener("click", (event) => {
    const resetButton = event.target.closest("[data-bill-reset]");
    if (resetButton) {
      const orderIndex = Number(resetButton.dataset.billReset);
      if (state.order[orderIndex]) {
        delete state.order[orderIndex].acceptance;
        state.order[orderIndex].outAt = null;
        state.order[orderIndex].rejectedAt = null;
        state.order[orderIndex].deliveredAt = null;
        if (state.billDeliveryPromptIndex === orderIndex) {
          state.billDeliveryPromptIndex = null;
        }
        persistCurrentOrder();
        renderBill();
      }
      return;
    }

    const deliveryOpenButton = event.target.closest("[data-bill-delivery-open]");
    if (deliveryOpenButton) {
      openBillDeliveryPopup(
        Number(deliveryOpenButton.dataset.billDeliveryOpen),
        deliveryOpenButton,
      );
      return;
    }

    const acceptButton = event.target.closest("[data-bill-accept]");
    if (acceptButton) {
      const orderIndex = Number(acceptButton.dataset.billAccept);
      if (state.order[orderIndex]) {
        state.order[orderIndex].acceptance = "out";
        state.order[orderIndex].outAt = Number.isFinite(state.order[orderIndex].outAt)
          ? state.order[orderIndex].outAt
          : Date.now();
        state.order[orderIndex].rejectedAt = null;
        state.order[orderIndex].deliveredAt = null;
        state.billDeliveryPromptIndex = null;
        persistCurrentOrder();
        renderBill();
      }
      return;
    }

    const rejectButton = event.target.closest("[data-bill-reject]");
    if (!rejectButton) return;

    const orderIndex = Number(rejectButton.dataset.billReject);
    if (state.order[orderIndex]) {
      state.order[orderIndex].acceptance = "rejected";
      state.order[orderIndex].rejectedAt = Date.now();
      state.order[orderIndex].outAt = null;
      state.order[orderIndex].deliveredAt = null;
      if (state.billDeliveryPromptIndex === orderIndex) {
        state.billDeliveryPromptIndex = null;
      }
      persistCurrentOrder();
      renderBill();
    }
  });
}

if (elements.billPrint) {
  elements.billPrint.addEventListener("click", () => {
    window.print();
  });
}

if (elements.billDeliveryPopup) {
  elements.billDeliveryPopup.addEventListener("click", (event) => {
    if (event.target === elements.billDeliveryPopup || event.target.closest("[data-bill-delivery-close]")) {
      closeBillDeliveryPopup();
      return;
    }

    const yesButton = event.target.closest("[data-bill-delivery-yes]");
    if (yesButton) {
      confirmBillDeliveryPopup();
    }
  });
}

if (elements.dishModal) {
  elements.dishModal.addEventListener("click", (event) => {
    if (event.target === elements.dishModal || event.target.closest("[data-dish-modal-close]")) {
      closeDishPopup();
      return;
    }

    const stepButton = event.target.closest("[data-dish-modal-step]");
    if (stepButton) {
      adjustDishQuantity(Number(stepButton.dataset.dishModalStep));
      return;
    }

    const addButton = event.target.closest("[data-dish-modal-add]");
    if (addButton) {
      confirmDishPopup();
      return;
    }

    const deleteButton = event.target.closest("[data-dish-modal-delete]");
    if (deleteButton) {
      deleteDishPopup();
    }
  });
}

if (elements.dishModalNote) {
  elements.dishModalNote.addEventListener("input", (event) => {
    state.selectedDishNote = event.target.value;
  });
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.selectedDish) {
    closeDishPopup();
  }
});

window.addEventListener("resize", () => {
  syncDishPopupBounds(
    Boolean(state.selectedDish) &&
      Number.isInteger(state.editingOrderIndex) &&
      state.editingOrderIndex >= 0 &&
      state.editingOrderIndex < state.order.length,
  );

  if (state.page === "bill" && Number.isInteger(state.billDeliveryPromptIndex) && elements.billList) {
    const anchorElement = elements.billList.querySelector(
      `[data-bill-delivery-open="${state.billDeliveryPromptIndex}"]`,
    );
    state.billDeliveryPopupPosition = computeBillDeliveryPopupPosition(anchorElement);
    syncBillDeliveryPopup();
  }

  if (
    state.page === "tickets" &&
    state.ticketsActionMode &&
    Number.isInteger(state.ticketsActionTableNumber) &&
    Number.isInteger(state.ticketsActionIndex) &&
    elements.ticketsList
  ) {
    const anchorElement = state.ticketsActionMode === "delivery"
      ? elements.ticketsList.querySelector(
          `[data-ticket-deliver="${state.ticketsActionIndex}"][data-ticket-table="${state.ticketsActionTableNumber}"]`,
        )
      : elements.ticketsList.querySelector(
          `[data-ticket-overview-edit="${state.ticketsActionIndex}"][data-ticket-table="${state.ticketsActionTableNumber}"]`,
        ) ||
        elements.ticketsList.querySelector(
          `[data-ticket-accept="${state.ticketsActionIndex}"][data-ticket-table="${state.ticketsActionTableNumber}"]`,
        );
    state.ticketsActionPopupPosition = computeTicketsActionPopupPosition(
      anchorElement,
      state.ticketsActionMode,
    );
    syncTicketsActionPopup();
  }

  if (
    state.page === "captain-delivery" &&
    Number.isInteger(state.captainDeliveryPromptIndex) &&
    elements.captainDeliveryList
  ) {
    const anchorElement = elements.captainDeliveryList.querySelector(
      `[data-captain-delivery-confirm="${state.captainDeliveryPromptIndex}"]`,
    );
    state.captainDeliveryPopupPosition = computeCaptainDeliveryPopupPosition(anchorElement);
    syncCaptainDeliveryPopup();
  }
});

window.addEventListener("hashchange", syncRoute);

window.setInterval(() => {
  if (state.page === "bill" && state.order.length > 0) {
    updateBillTimers();
  }

  if (state.page === "tickets" && elements.ticketsList) {
    updateTicketTimers();
  }

  if (state.page === "captain-delivery" && elements.captainDeliveryList) {
    updateCaptainDeliveryTimers();
  }
}, 1000);

(async () => {
  await hydrateDiningTablesFromDatabase().catch((error) => {
    console.warn("Dining table hydration failed:", error);
  });

  databaseBootstrapPromise = hydrateOrdersFromDatabase().catch((error) => {
    console.warn("Supabase hydration failed:", error);
  });

  await databaseBootstrapPromise;
  databaseHydrated = true;
  syncRoute();
})();
