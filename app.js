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
  loginForm: document.querySelector("[data-login-form]"),
  loginTitle: document.querySelector("[data-login-title]"),
  loginError: document.querySelector("[data-login-error]"),
  loginUsername: document.querySelector("[data-login-username]"),
  loginPassword: document.querySelector("[data-login-password]"),
  adminTitle: document.querySelector("[data-admin-title]"),
  adminMain: document.querySelector("[data-admin-main]"),
  adminSidebar: document.querySelector("[data-admin-sidebar]"),
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
  orderClose: document.querySelector("[data-order-close]"),
  paymentCloseModal: document.querySelector("[data-payment-close-modal]"),
  paymentCloseDismiss: document.querySelector("[data-payment-close-dismiss]"),
  paymentMethod: document.querySelector("[data-payment-method]"),
  paymentReceipt: document.querySelector("[data-payment-receipt]"),
  paymentReceiptLabel: document.querySelector("[data-payment-receipt-label]"),
  paymentCloseConfirm: document.querySelector("[data-payment-close-confirm]"),
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
  loginTarget: null,
  loginError: "",
  currentUser: null,
  adminView: "dashboard",
  adminDate: new Date(),
  adminAttendanceDropdownIndex: null,
  adminSettingsRole: "kitchen-supervisor",
  adminAddMemberOpen: false,
  ticketsBackRoute: "sous-chef",
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
  paymentCloseOpen: false,
  paymentMethod: "",
  paymentReceiptFileName: "",
};

const adminSidebarItems = [
  { view: "dashboard", route: "admin", label: "Dashboard" },
  { view: "tables", route: "admin-tables", label: "Table Overview" },
  { view: "attendance", route: "admin-attendance", label: "Staff Attendance" },
  { view: "tickets", route: "tickets", label: "Ticket Status" },
  { view: "settings", route: "admin-settings", label: "Settings" },
];

const adminSettingsRoles = [
  { id: "kitchen-supervisor", label: "Kitchen Supervisor", addLabel: "Add Kitchen Supervisor" },
  { id: "captain", label: "Captain", addLabel: "Add Captain" },
  { id: "staff", label: "Staff", addLabel: "Add Staff" },
  { id: "admin", label: "Admin", addLabel: "Add Admin" },
];

const protectedLoginTargets = {
  admin: ["admin"],
  captain: ["captain"],
  "sous-chef": ["kitchen-supervisor"],
};

const loginTargetLabels = {
  admin: "Admin",
  captain: "Captain",
  "sous-chef": "Kitchen Supervisor",
};

const attendanceRoleIds = ["kitchen-supervisor", "captain", "staff"];

const adminMembersByRole = {
  admin: [{ name: "Admin", username: "admin", password: "12345", id: null }],
  "kitchen-supervisor": [{ name: "Abc XyZ", username: "ab@kdh", password: "12345" }],
  captain: [],
  staff: [],
};

const adminAttendanceByUsername = new Map();

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

function normalizeUsername(value) {
  return String(value || "").trim().toLowerCase();
}

function getLoginLabel(target) {
  return loginTargetLabels[target] || "Admin";
}

function requiresLogin(target) {
  return Object.prototype.hasOwnProperty.call(protectedLoginTargets, target);
}

function isUserAuthorizedForTarget(user, target) {
  if (!requiresLogin(target)) return true;
  return Boolean(user && protectedLoginTargets[target].includes(user.roleId));
}

function updateHash(hash, options = {}) {
  if (options.replace) {
    history.replaceState(null, "", hash || location.pathname);
    syncRoute();
    return;
  }
  location.hash = hash;
}

function openLoginForTarget(target, options = {}) {
  state.loginTarget = target;
  state.loginError = "";
  if (elements.loginForm) {
    elements.loginForm.reset();
  }
  updateHash(`#login-${target}`, options);
}

function getDbRoleForSettingsRole(roleId) {
  return roleId === "kitchen-supervisor" ? "kitchen_supervisor" : roleId;
}

function getSettingsRoleForDbRole(role) {
  if (role === "kitchen_supervisor" || role === "sous_chef") return "kitchen-supervisor";
  return role;
}

function getAllAdminMembers() {
  return Object.entries(adminMembersByRole).flatMap(([roleId, members]) =>
    members.map((member) => ({ ...member, roleId })),
  );
}

function findMemberForLogin(target, username, password) {
  const normalizedUsername = normalizeUsername(username);
  const allowedRoleIds = protectedLoginTargets[target] || [];

  return getAllAdminMembers().find(
    (member) =>
      allowedRoleIds.includes(member.roleId) &&
      normalizeUsername(member.username) === normalizedUsername &&
      String(member.password) === String(password) &&
      member.isActive !== false,
  );
}

function resetAdminMembers() {
  for (const role of adminSettingsRoles) {
    adminMembersByRole[role.id] = [];
  }
}

function ensureDefaultAdminMember() {
  const adminMembers = adminMembersByRole.admin || [];
  if (!adminMembers.some((member) => normalizeUsername(member.username) === "admin")) {
    adminMembers.unshift({ name: "Admin", username: "admin", password: "12345", id: null });
  }
  adminMembersByRole.admin = adminMembers;
}

function getAttendanceRecord(username) {
  const key = normalizeUsername(username);
  if (!adminAttendanceByUsername.has(key)) {
    adminAttendanceByUsername.set(key, {
      status: "",
      checkIn: "--",
      checkOut: "--",
    });
  }
  return adminAttendanceByUsername.get(key);
}

function getAdminAttendanceRows() {
  return attendanceRoleIds.flatMap((roleId) =>
    (adminMembersByRole[roleId] || [])
      .filter((member) => member.isActive !== false)
      .map((member) => {
        const attendance = getAttendanceRecord(member.username);
        return {
          ...attendance,
          name: member.name,
          username: member.username,
          roleId,
        };
      }),
  );
}

function parseRoute() {
  const hash = location.hash.replace(/^#/, "");

  if (hash.startsWith("login-")) {
    const loginTarget = hash.slice(6);
    return {
      page: "login",
      loginTarget: requiresLogin(loginTarget) ? loginTarget : "admin",
    };
  }

  if (hash === "admin" || hash === "admin-dashboard") {
    return { page: "admin", adminView: "dashboard" };
  }

  if (hash === "admin-tables") {
    return { page: "admin", adminView: "tables" };
  }

  if (hash === "admin-attendance") {
    return { page: "admin", adminView: "attendance" };
  }

  if (hash === "admin-tickets") {
    return { page: "tickets" };
  }

  if (hash === "admin-settings") {
    return { page: "admin", adminView: "settings" };
  }

  if (hash.startsWith("admin-table-")) {
    const tableNumber = Number(hash.slice(12));
    return {
      page: "admin",
      adminView: "table-detail",
      tableNumber: Number.isFinite(tableNumber) && tableNumber > 0 ? tableNumber : 1,
    };
  }

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

function setRoute(page, tableNumber = 1, options = {}) {
  if (page === "admin" || page === "admin-dashboard") {
    updateHash("#admin", options);
    return;
  }

  if (page === "admin-tables") {
    updateHash("#admin-tables", options);
    return;
  }

  if (page === "admin-attendance") {
    updateHash("#admin-attendance", options);
    return;
  }

  if (page === "admin-tickets") {
    updateHash("#tickets", options);
    return;
  }

  if (page === "admin-settings") {
    updateHash("#admin-settings", options);
    return;
  }

  if (page === "admin-table-detail") {
    updateHash(`#admin-table-${tableNumber}`, options);
    return;
  }

  if (page === "menu") {
    updateHash(`#menu-${tableNumber}`, options);
    return;
  }

  if (page === "captain") {
    updateHash("#captain", options);
    return;
  }

  if (page === "cashier") {
    updateHash("#cashier", options);
    return;
  }

  if (page === "sous-chef") {
    updateHash("#sous-chef", options);
    return;
  }

  if (page === "tickets") {
    updateHash("#tickets", options);
    return;
  }

  if (page === "bill") {
    updateHash(`#bill-${tableNumber}`, options);
    return;
  }

  if (page === "captain-bill") {
    updateHash(`#captain-bill-${tableNumber}`, options);
    return;
  }

  if (page === "captain-delivery") {
    updateHash(`#captain-delivery-${tableNumber}`, options);
    return;
  }

  updateHash("", options);
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

function isPaymentPendingOrder(orderItems) {
  return (
    orderItems.length > 0 &&
    orderItems.every(
      (item) => item.acceptance === "delivered" && Number.isFinite(item.captainDeliveredAt),
    )
  );
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

function getSousChefTableVisualState(tableNumber) {
  const orderItems = state.tableOrders.get(tableNumber) || [];
  const activePublishedItems = orderItems.filter(
    (item) => isPublishedOrderItem(item) && item.acceptance !== "delivered",
  );

  if (!activePublishedItems.length) return "empty";

  const hasPreparingItem = activePublishedItems.some(
    (item) => item.acceptance === "out" || item.acceptance === "accepted",
  );
  return hasPreparingItem ? "preparing" : "live";
}

function getCaptainTableVisualState(tableNumber) {
  const orderItems = state.tableOrders.get(tableNumber) || [];
  if (!orderItems.length) {
    return {
      state: "empty",
      hasReadyDot: false,
    };
  }

  const unsettledItems = orderItems.filter(
    (item) => item.acceptance !== "delivered" || !Number.isFinite(item.captainDeliveredAt),
  );
  if (!unsettledItems.length) {
    return {
      state: "captain-delivered",
      hasReadyDot: false,
    };
  }

  const hasReadyDot = unsettledItems.some((item) => item.acceptance === "delivered");

  const publishedItems = unsettledItems.filter((item) => isPublishedOrderItem(item));
  if (publishedItems.length) {
    const hasChefVisibleItems = publishedItems.some((item) => item.acceptance !== "delivered");
    const hasPreparingItem = publishedItems.some(
      (item) => item.acceptance === "out" || item.acceptance === "accepted",
    );

    return {
      state: !hasChefVisibleItems ? "chef-delivered" : hasPreparingItem ? "preparing" : "live",
      hasReadyDot,
    };
  }

  const draftItems = unsettledItems.filter((item) => !isPublishedOrderItem(item));
  if (draftItems.length) {
    return {
      state: "live",
      hasReadyDot,
    };
  }

  const hasPreparingItem = unsettledItems.some(
    (item) =>
      item.acceptance === "out" ||
      item.acceptance === "accepted" ||
      item.acceptance === "delivered",
  );

  return {
    state: !hasChefVisibleItems ? "chef-delivered" : hasPreparingItem ? "preparing" : "live",
    hasReadyDot,
  };
}

function applyTableVisualState(button, visualState, tableNumber, { hasReadyDot = false } = {}) {
  button.classList.toggle("table-tile--live", visualState === "live");
  button.classList.toggle("table-tile--preparing", visualState === "preparing");
  button.classList.toggle("table-tile--chef-delivered", visualState === "chef-delivered");
  button.classList.toggle("table-tile--captain-delivered", visualState === "captain-delivered");
  button.classList.toggle("table-tile--captain-ready", hasReadyDot);
  button.setAttribute(
    "aria-label",
    visualState === "captain-delivered"
      ? `Table ${tableNumber}, delivered to table`
      : visualState === "chef-delivered"
        ? `Table ${tableNumber}, kitchen delivered order`
        : visualState === "preparing"
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
  const acceptance =
    row.acceptance_status === "pending"
      ? null
      : row.acceptance_status === "accepted"
        ? "out"
        : row.acceptance_status === "out" ||
            row.acceptance_status === "rejected" ||
            row.acceptance_status === "delivered"
          ? row.acceptance_status
          : null;
  const deliveredAt = fromSupabaseTimestamp(row.delivered_at);
  const savedCaptainDeliveredAt = fromSupabaseTimestamp(row.captain_delivered_at);
  const captainDeliveredAt =
    savedCaptainDeliveredAt ??
    (row.status === "delivered" && acceptance === "delivered" && Number.isFinite(deliveredAt)
      ? deliveredAt
      : null);

  return {
    categoryName: row.category_name,
    dishName: row.dish_name,
    quantity: Number(row.quantity) || 1,
    note: row.note || "",
    acceptance,
    receivedAt: fromSupabaseTimestamp(row.received_at) ?? Date.now(),
    sharedAt: fromSupabaseTimestamp(row.shared_at),
    outAt: fromSupabaseTimestamp(row.out_at),
    rejectedAt: fromSupabaseTimestamp(row.rejected_at),
    deliveredAt,
    captainDeliveredAt,
  };
}

function mapOrderItemForDb(item, sortOrder) {
  return {
    category_name: item.categoryName,
    dish_name: item.dishName,
    quantity: Number(item.quantity) || 1,
    note: item.note || "",
    status: Number.isFinite(item.captainDeliveredAt) ? "delivered" : "pending",
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

async function hydrateUsersFromDatabase() {
  const rows = await supabaseRequest("users", {
    query: {
      select: "id,full_name,role,username,password,is_active",
      is_active: "eq.true",
      order: "full_name.asc",
    },
  });

  if (!Array.isArray(rows)) return;

  resetAdminMembers();
  for (const row of rows) {
    const roleId = getSettingsRoleForDbRole(row.role);
    if (!adminMembersByRole[roleId]) continue;

    adminMembersByRole[roleId].push({
      id: row.id ?? null,
      name: row.full_name || "",
      username: row.username || "",
      password: row.password || "",
      isActive: row.is_active !== false,
    });
  }
  ensureDefaultAdminMember();
}

function persistAdminMemberToDatabase(member, roleId) {
  enqueueDatabaseWrite(async () => {
    const insertedRows = await supabaseRequest("users", {
      method: "POST",
      query: {
        select: "id",
        on_conflict: "username",
      },
      prefer: "return=representation,resolution=merge-duplicates",
      body: {
        full_name: member.name,
        role: getDbRoleForSettingsRole(roleId),
        username: member.username,
        password: member.password,
        is_active: true,
      },
    });

    const insertedId = insertedRows?.[0]?.id;
    if (insertedId !== undefined && insertedId !== null) {
      member.id = insertedId;
    }
  });
}

function deleteAdminMemberFromDatabase(member) {
  enqueueDatabaseWrite(async () => {
    if (member.id) {
      await supabaseRequest("users", {
        method: "PATCH",
        query: {
          id: `eq.${member.id}`,
        },
        prefer: "return=minimal",
        body: {
          is_active: false,
        },
      });
      return;
    }

    await supabaseRequest("users", {
      method: "PATCH",
      query: {
        username: `eq.${member.username}`,
      },
      prefer: "return=minimal",
      body: {
        is_active: false,
      },
    });
  });
}

async function hydrateOrdersFromDatabase() {
  const rows = await supabaseRequest("orders", {
    query: {
      select: "table_number,table_id,status,shared_at,order_items(*)",
      status: "not.in.(closed,cancelled)",
      order: "table_number.asc",
    },
  });

  const tableOrders = new Map();
  for (const row of rows || []) {
    if (row.status === "closed" || row.status === "cancelled") continue;

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
      status: "not.in.(closed,cancelled)",
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
  const orderStatus = isPaymentPendingOrder(orderItems)
    ? "payment_pending"
    : isSharedOrder(orderItems)
      ? "shared"
      : "open";

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
        status: "not.in.(closed,cancelled)",
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

async function closeOrderInDatabase(tableNumber) {
  if (!Number.isFinite(tableNumber)) return;

  const existingOrderRows = await supabaseRequest("orders", {
    query: {
      select: "id,table_number,table_id",
      table_number: `eq.${tableNumber}`,
      status: "not.in.(closed,cancelled)",
      limit: "1",
    },
  });
  const existingOrderId = existingOrderRows?.[0]?.id || null;
  if (!existingOrderId) return;

  await supabaseRequest("orders", {
    method: "PATCH",
    query: {
      id: `eq.${existingOrderId}`,
    },
    prefer: "return=minimal",
    body: {
      status: "closed",
      closed_at: new Date().toISOString(),
    },
  });
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

function renderLogin() {
  const loginTarget = state.loginTarget || "admin";

  if (elements.loginTitle) {
    elements.loginTitle.textContent = `${getLoginLabel(loginTarget)} Log-in`;
  }

  if (elements.loginError) {
    elements.loginError.textContent = state.loginError;
  }
}

function isElementVisible(element) {
  return Boolean(element && !element.hidden);
}

function syncBodyModalOpen() {
  const hasOpenModal = [
    elements.dishModal,
    elements.ticketsActionPopup,
    elements.paymentCloseModal,
  ].some(isElementVisible);
  document.body.classList.toggle("modal-open", hasOpenModal);
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
    captainDeliveredAt: Number.isFinite(existingOrderItem?.captainDeliveredAt)
      ? existingOrderItem.captainDeliveredAt
      : null,
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
  syncBodyModalOpen();

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

function resetPaymentCloseForm() {
  state.paymentCloseOpen = false;
  state.paymentMethod = "";
  state.paymentReceiptFileName = "";

  if (elements.paymentMethod) {
    elements.paymentMethod.value = "";
  }

  if (elements.paymentReceipt) {
    elements.paymentReceipt.value = "";
  }
}

function syncPaymentCloseModal() {
  if (!elements.paymentCloseModal) return;

  const shouldShow = state.paymentCloseOpen && state.page === "menu" && state.order.length > 0;
  const canClose = Boolean(state.paymentMethod && state.paymentReceiptFileName);
  const canUploadReceipt = Boolean(state.paymentMethod);

  elements.paymentCloseModal.hidden = !shouldShow;
  elements.paymentCloseModal.setAttribute("aria-hidden", shouldShow ? "false" : "true");

  if (elements.paymentMethod && elements.paymentMethod.value !== state.paymentMethod) {
    elements.paymentMethod.value = state.paymentMethod;
  }

  if (elements.paymentReceiptLabel) {
    elements.paymentReceiptLabel.textContent = state.paymentReceiptFileName || "Upload Payment Image";
  }

  if (elements.paymentReceipt) {
    elements.paymentReceipt.disabled = !canUploadReceipt;
    elements.paymentReceipt.setAttribute("aria-disabled", canUploadReceipt ? "false" : "true");
  }

  elements.paymentCloseModal.classList.toggle(
    "payment-close-modal--has-receipt",
    Boolean(state.paymentReceiptFileName),
  );
  elements.paymentCloseModal.classList.toggle(
    "payment-close-modal--payment-selected",
    canUploadReceipt,
  );

  if (elements.paymentCloseConfirm) {
    elements.paymentCloseConfirm.disabled = !canClose;
    elements.paymentCloseConfirm.classList.toggle("payment-close-modal__confirm--active", canClose);
    elements.paymentCloseConfirm.setAttribute("aria-disabled", canClose ? "false" : "true");
  }

  syncBodyModalOpen();
}

function openPaymentClosePopup() {
  if (!isPaymentPendingOrder(state.order)) return;

  resetPaymentCloseForm();
  state.paymentCloseOpen = true;
  syncPaymentCloseModal();

  requestAnimationFrame(() => {
    elements.paymentMethod?.focus({ preventScroll: true });
  });
}

function closePaymentClosePopup() {
  if (!state.paymentCloseOpen) return;

  resetPaymentCloseForm();
  syncPaymentCloseModal();
}

function completePaymentClose() {
  if (!state.order.length || !state.paymentMethod || !state.paymentReceiptFileName) return;
  if (!isPaymentPendingOrder(state.order)) return;

  const tableNumber = state.tableNumber;
  state.tableOrders.set(tableNumber, []);
  state.captainDraftStartedAtByTable.delete(tableNumber);
  state.order = [];
  state.selectedDish = null;
  state.selectedDishQuantity = 1;
  state.selectedDishNote = "";
  state.selectedDishReceivedAt = null;
  state.editingOrderIndex = null;
  state.captainDeliveryPromptIndex = null;
  state.captainDeliveryPopupPosition = null;
  resetPaymentCloseForm();

  enqueueDatabaseWrite(() => closeOrderInDatabase(tableNumber));
  renderMenu();
  renderCaptain();
  renderSousChef();
  renderTickets();
  syncPaymentCloseModal();
  setRoute("captain");
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

function buildCategoryTicketAcceptanceMarkup(item, rowTableNumber, rowIndex, readOnly = false) {
  if (item.acceptance === "out") {
    if (readOnly) {
      return `
        <div class="ticket-card__status bill-item__status bill-item__status--out" aria-hidden="true">
          Out
        </div>`;
    }

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
    if (readOnly) {
      return `
        <div class="ticket-card__status bill-item__status bill-item__status--rejected" aria-hidden="true">
          ${buildRefreshIconMarkup()}
        </div>`;
    }

    return `
      <button
        class="ticket-card__status bill-item__status bill-item__status--rejected"
        type="button"
        data-ticket-reset="${rowIndex}"
        data-ticket-table="${escapeHtml(String(rowTableNumber))}"
        aria-label="Reset ${escapeHtml(item.dishName)}"
      >${buildRefreshIconMarkup()}</button>`;
  }

  if (readOnly) {
    return `
      <div class="ticket-card__status bill-item__status ticket-card__status--pending" aria-hidden="true">
        New
      </div>`;
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

function isAdminTicketReadOnly() {
  return state.ticketsBackRoute === "admin" || state.currentUser?.roleId === "admin";
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
  const readOnly = isAdminTicketReadOnly();
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
                  ${buildCategoryTicketAcceptanceMarkup(item, rowTableNumber, rowIndex, readOnly)}
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
  const readOnly = isAdminTicketReadOnly();

  return `
    <article class="ticket-card ticket-card--overview" data-ticket-table="${escapeHtml(String(ticketData.tableNumber))}">
      <div class="ticket-card__header ${ticketData.isNew ? "ticket-card__header--new" : "ticket-card__header--live"}">
        <span>Table ${escapeHtml(String(ticketData.tableNumber))}</span>
        <span data-ticket-header-time>${escapeHtml(formatElapsedTime(Date.now() - ticketData.receivedAt))}</span>
      </div>
      <div class="ticket-card__columns ticket-card__columns--overview">
        <div class="ticket-card__column ticket-card__column--name">Items</div>
        <div class="ticket-card__column ticket-card__column--qty">Qty</div>
        <div class="ticket-card__column ticket-card__column--edit">${readOnly ? "Status" : "Edit"}</div>
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
                <div class="ticket-card__main ticket-card__main--overview">
                  <div class="ticket-card__name ticket-card__name--overview">${escapeHtml(`${index + 1}. ${item.dishName}`)}</div>
                  <div class="ticket-card__qty ticket-card__qty--overview">${escapeHtml(String(item.quantity))}</div>
                  ${buildTicketOverviewActionMarkup(item, ticketData.tableNumber, rowIndex, readOnly)}
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

function buildTicketOverviewActionMarkup(item, tableNumber, rowIndex, readOnly = false) {
  if (item.acceptance === "out") {
    if (readOnly) {
      return '<div class="ticket-card__status ticket-card__status--out" aria-hidden="true">Out</div>';
    }

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
    if (readOnly) {
      return `
        <div class="ticket-card__status ticket-card__status--rejected" aria-hidden="true">
          ${buildRefreshIconMarkup()}
        </div>`;
    }

    return `
      <button
        class="ticket-card__status ticket-card__status--rejected"
        type="button"
        data-ticket-reset="${escapeHtml(String(rowIndex))}"
        data-ticket-table="${escapeHtml(String(tableNumber))}"
        aria-label="Reset ${escapeHtml(item.dishName)}"
      >${buildRefreshIconMarkup()}</button>`;
  }

  if (readOnly) {
    return '<div class="ticket-card__status ticket-card__status--pending" aria-hidden="true">New</div>';
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

function formatAdminDate(date) {
  const parts = new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).formatToParts(date);
  const day = parts.find((part) => part.type === "day")?.value || "";
  const month = parts.find((part) => part.type === "month")?.value || "";
  const year = parts.find((part) => part.type === "year")?.value || "";
  return `${day} ${month}, ${year}`.trim();
}

function formatAdminDateForInput(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatAdminTimeForInput(value) {
  const timeValue = String(value || "").trim();
  const twentyFourHourMatch = timeValue.match(/^(\d{1,2}):(\d{2})$/);

  if (twentyFourHourMatch) {
    const hours = Number(twentyFourHourMatch[1]);
    const minutes = Number(twentyFourHourMatch[2]);
    if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59) {
      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
    }
  }

  const twelveHourMatch = timeValue.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!twelveHourMatch) return "";

  let hours = Number(twelveHourMatch[1]);
  const minutes = Number(twelveHourMatch[2]);
  const meridiem = twelveHourMatch[3].toUpperCase();

  if (hours < 1 || hours > 12 || minutes < 0 || minutes > 59) return "";
  if (meridiem === "AM") {
    hours = hours === 12 ? 0 : hours;
  } else {
    hours = hours === 12 ? 12 : hours + 12;
  }

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function formatAdminTimeForDisplay(value) {
  const inputValue = formatAdminTimeForInput(value);
  if (!inputValue) return "";

  const [hourText, minuteText] = inputValue.split(":");
  const hours = Number(hourText);
  const displayHour = hours % 12 || 12;
  const meridiem = hours >= 12 ? "PM" : "AM";
  return `${displayHour}:${minuteText} ${meridiem}`;
}

function formatCurrentAdminTime() {
  const now = new Date();
  return formatAdminTimeForDisplay(
    `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`,
  );
}

function openNativePicker(inputElement) {
  if (!inputElement) return;

  inputElement.focus({ preventScroll: true });
  if (typeof inputElement.showPicker === "function") {
    try {
      inputElement.showPicker();
      return;
    } catch (error) {
      inputElement.click();
      return;
    }
  }

  inputElement.click();
}

function getAdminTitle() {
  return state.adminView === "table-detail" ? "Admin (Ticket Status)" : "Admin";
}

function buildAdminSidebarMarkup() {
  if (state.adminView === "table-detail") {
    const selectedTicket = getTicketDataForOrder(
      state.tableNumber,
      state.tableOrders.get(state.tableNumber) || [],
    );
    const categoryNames = selectedTicket
      ? selectedTicket.categories.filter((categoryName) =>
          selectedTicket.items.some(
            (item) => item.categoryName === categoryName && item.acceptance !== "delivered",
          ),
        )
      : [];

    return `
      <div class="admin-sidebar__group">
        <button class="admin-sidebar__row" type="button" data-admin-route="admin-tables">
          <span class="admin-sidebar__label">Tables</span>
        </button>
        <div class="admin-sidebar__row admin-sidebar__row--selected" aria-current="page">
          <span class="admin-sidebar__icon" aria-hidden="true">‹</span>
          <span class="admin-sidebar__label">Tickets (${selectedTicket ? 1 : 0})</span>
        </div>
        <div class="admin-sidebar__heading">Live Category Wise</div>
        ${
          categoryNames.length
            ? categoryNames
                .map(
                  (categoryName) => `
                    <div class="admin-sidebar__row">
                      <span class="admin-sidebar__label">${escapeHtml(categoryName)}</span>
                    </div>`,
                )
                .join("")
            : '<div class="admin-sidebar__empty">NA</div>'
        }
      </div>`;
  }

  if (state.adminView === "settings") {
    return `
      <div class="admin-sidebar__group">
        ${adminSidebarItems
          .map((item) => {
            const isSelected = item.view === state.adminView;
            return `
              <button
                class="admin-sidebar__row${isSelected ? " admin-sidebar__row--selected" : ""}"
                type="button"
                data-admin-route="${escapeHtml(item.route)}"
                aria-current="${isSelected ? "page" : "false"}"
              >
                ${isSelected ? '<span class="admin-sidebar__icon" aria-hidden="true">‹</span>' : ""}
                <span class="admin-sidebar__label">${escapeHtml(item.label)}</span>
              </button>`;
          })
          .join("")}
      </div>
      <button class="admin-sidebar__logout" type="button" data-admin-logout>
        <img class="admin-sidebar__logout-icon" src="./Logout.png" alt="" aria-hidden="true">
        <span>Log Out</span>
      </button>`;
  }

  return adminSidebarItems
    .map((item) => {
      const isSelected = item.view === state.adminView;
      return `
        <button
          class="admin-sidebar__row${isSelected ? " admin-sidebar__row--selected" : ""}"
          type="button"
          data-admin-route="${escapeHtml(item.route)}"
          aria-current="${isSelected ? "page" : "false"}"
        >
          ${isSelected ? '<span class="admin-sidebar__icon" aria-hidden="true">‹</span>' : ""}
          <span class="admin-sidebar__label">${escapeHtml(item.label)}</span>
        </button>`;
    })
    .join("");
}

function buildAdminDashboardMarkup() {
  return `
    <ul class="admin-dashboard">
      <li>Sales Summary</li>
      <li>Active Orders</li>
      <li>Revenue Statistics</li>
      <li>Quick Insights</li>
    </ul>`;
}

function buildAdminTableGridMarkup() {
  return `
    <div class="table-grid admin-table-grid">
      ${Array.from({ length: 20 }, (_, index) => {
        const tableNumber = index + 1;
        return `
          <button
            class="table-tile"
            type="button"
            data-admin-table="${tableNumber}"
          >${tableNumber}</button>`;
      }).join("")}
    </div>`;
}

function buildAdminAttendanceMarkup() {
  const dateInputValue = formatAdminDateForInput(state.adminDate);
  const attendanceRows = getAdminAttendanceRows();

  return `
    <div class="admin-attendance">
      <div class="admin-attendance__date" data-admin-date-picker>
        <button class="admin-date-nav" type="button" data-admin-date-shift="-1" aria-label="Previous day">
          <span aria-hidden="true">‹</span>
        </button>
        <div class="admin-attendance__date-current">
          <span class="admin-attendance__calendar" aria-hidden="true">
            <span class="admin-attendance__calendar-line"></span>
          </span>
          <span>${escapeHtml(formatAdminDate(state.adminDate))}</span>
        </div>
        <input
          class="admin-attendance__picker-input"
          type="date"
          value="${escapeHtml(dateInputValue)}"
          data-admin-date-input
          aria-label="Choose attendance date"
        >
        <button class="admin-date-nav" type="button" data-admin-date-shift="1" aria-label="Next day">
          <span aria-hidden="true">›</span>
        </button>
      </div>

      <div class="admin-attendance__head">
        <div class="admin-attendance__name">Name</div>
        <div class="admin-attendance__metrics">
          <div class="admin-attendance__status">Attendance</div>
          <div class="admin-attendance__time">Check In</div>
          <div class="admin-attendance__time">Check Out</div>
        </div>
      </div>

      ${
        attendanceRows.length
          ? attendanceRows
              .map((row, index) => {
            const isPresent = row.status === "present";
            const isAbsent = row.status === "absent";
            const isDropdownOpen = state.adminAttendanceDropdownIndex === index;
            const triggerStatusClass = isPresent
              ? " admin-attendance__status-trigger--present"
              : isAbsent
                ? " admin-attendance__status-trigger--absent"
                : "";
            const statusSymbol = isPresent ? "✓" : isAbsent ? "×" : "";
            const checkInInputValue = formatAdminTimeForInput(row.checkIn);
            const checkOutInputValue = formatAdminTimeForInput(row.checkOut);

            return `
            <div class="admin-attendance__row${isDropdownOpen ? " admin-attendance__row--status-open" : ""}">
              <div class="admin-attendance__name">${escapeHtml(row.name)}</div>
              <div class="admin-attendance__metrics">
                <div class="admin-attendance__status">
                  <div class="admin-attendance__status-dropdown" data-admin-attendance-dropdown>
                    <button
                      class="admin-attendance__status-trigger${triggerStatusClass}${isDropdownOpen ? " admin-attendance__status-trigger--open" : ""}"
                      type="button"
                      data-admin-attendance-toggle="${index}"
                      aria-label="Choose ${escapeHtml(row.name)} attendance"
                      aria-expanded="${isDropdownOpen ? "true" : "false"}"
                    >
                      <span class="admin-attendance__status-value">${statusSymbol}</span>
                      <span class="admin-attendance__status-chevron" aria-hidden="true"></span>
                    </button>
                    ${
                      isDropdownOpen
                        ? `
                    <div class="admin-attendance__status-menu" role="menu">
                    <button
                      class="admin-attendance__status-option admin-attendance__status-option--present"
                      type="button"
                      data-admin-attendance-status="${index}"
                      data-admin-status="present"
                      aria-label="Mark ${escapeHtml(row.name)} present"
                      role="menuitem"
                    >✓</button>
                    <button
                      class="admin-attendance__status-option admin-attendance__status-option--absent"
                      type="button"
                      data-admin-attendance-status="${index}"
                      data-admin-status="absent"
                      aria-label="Mark ${escapeHtml(row.name)} absent"
                      role="menuitem"
                    >×</button>
                    </div>`
                        : ""
                    }
                  </div>
                </div>
                <div class="admin-attendance__time">
                  <button
                    class="admin-attendance__time-button"
                    type="button"
                    data-admin-attendance-time-open="${index}:checkIn"
                  >${escapeHtml(row.checkIn)}</button>
                  <input
                    class="admin-attendance__picker-input"
                    type="time"
                    value="${escapeHtml(checkInInputValue)}"
                    data-admin-attendance-time-input="${index}:checkIn"
                    aria-label="${escapeHtml(row.name)} check in time"
                  >
                </div>
                <div class="admin-attendance__time">
                  <button
                    class="admin-attendance__time-button"
                    type="button"
                    data-admin-attendance-time-open="${index}:checkOut"
                  >${escapeHtml(row.checkOut)}</button>
                  <input
                    class="admin-attendance__picker-input"
                    type="time"
                    value="${escapeHtml(checkOutInputValue)}"
                    data-admin-attendance-time-input="${index}:checkOut"
                    aria-label="${escapeHtml(row.name)} check out time"
                  >
                </div>
              </div>
            </div>`;
              })
              .join("")
          : '<div class="admin-attendance__row"><div class="admin-attendance__name">NA</div><div class="admin-attendance__metrics"><div class="admin-attendance__status"></div><div class="admin-attendance__time">--</div><div class="admin-attendance__time">--</div></div></div>'
      }
    </div>`;
}

function getSelectedAdminSettingsRole() {
  return (
    adminSettingsRoles.find((role) => role.id === state.adminSettingsRole) ||
    adminSettingsRoles[0]
  );
}

function buildAdminSettingsTabsMarkup() {
  return adminSettingsRoles
    .map((role) => {
      const isSelected = role.id === state.adminSettingsRole;
      return `
        <button
          class="admin-settings__role${isSelected ? " admin-settings__role--selected" : ""}"
          type="button"
          data-admin-settings-role="${escapeHtml(role.id)}"
          aria-pressed="${isSelected ? "true" : "false"}"
        >${escapeHtml(role.label)}</button>`;
    })
    .join("");
}

function buildAdminSettingsMembersMarkup() {
  const members = adminMembersByRole[state.adminSettingsRole] || [];

  if (!members.length) {
    return '<div class="admin-settings__empty-row">NA</div>';
  }

  return members
    .map(
      (member, index) => `
        <div class="admin-settings__member-row">
          <div class="admin-settings__cell admin-settings__cell--name">${escapeHtml(member.name)}</div>
          <div class="admin-settings__cell admin-settings__cell--username">${escapeHtml(member.username)}</div>
          <div class="admin-settings__cell admin-settings__cell--password">${"*".repeat(
            Math.max(5, String(member.password || "").length),
          )}</div>
          <button
            class="admin-settings__delete"
            type="button"
            data-admin-member-delete="${index}"
            aria-label="Delete ${escapeHtml(member.name)}"
          >
            <span class="admin-settings__trash" aria-hidden="true"></span>
          </button>
        </div>`,
    )
    .join("");
}

function buildAdminAddMemberModalMarkup() {
  const selectedRole = getSelectedAdminSettingsRole();

  return `
    <form class="admin-member-modal" data-admin-member-form aria-label="${escapeHtml(
      selectedRole.addLabel,
    )}">
      <div class="admin-member-modal__header">
        <h2>${escapeHtml(selectedRole.addLabel)}</h2>
        <button class="admin-member-modal__close" type="button" data-admin-add-member-close aria-label="Close add member">
          <span aria-hidden="true"></span>
        </button>
      </div>

      <label class="admin-member-modal__field">
        <span>Name</span>
        <input
          class="admin-member-modal__input"
          type="text"
          name="name"
          placeholder="Enter Name"
          autocomplete="off"
          required
        >
      </label>

      <label class="admin-member-modal__field">
        <span>Username (Max 10 Char)</span>
        <input
          class="admin-member-modal__input"
          type="text"
          name="username"
          placeholder="Enter Username"
          autocomplete="off"
          maxlength="10"
          required
        >
      </label>

      <label class="admin-member-modal__field">
        <span>Password (5 Char)</span>
        <input
          class="admin-member-modal__input"
          type="password"
          name="password"
          placeholder="Enter Password"
          autocomplete="new-password"
          maxlength="5"
          minlength="5"
          required
        >
      </label>

      <button class="admin-member-modal__submit" type="submit">Add</button>
    </form>`;
}

function buildAdminSettingsMarkup() {
  return `
    <section class="admin-settings">
      <div class="admin-settings__content${state.adminAddMemberOpen ? " admin-settings__content--blurred" : ""}">
        <div class="admin-settings__roles" role="tablist" aria-label="Member roles">
          ${buildAdminSettingsTabsMarkup()}
        </div>

        <div class="admin-settings__add-row">
          <button class="admin-settings__add" type="button" data-admin-add-member-open>
            Add Member +
          </button>
        </div>

        <div class="admin-settings__header">
          <div class="admin-settings__cell admin-settings__cell--name">Name</div>
          <div class="admin-settings__cell admin-settings__cell--username">Username</div>
          <div class="admin-settings__cell admin-settings__cell--password">Password</div>
          <div class="admin-settings__delete-spacer" aria-hidden="true"></div>
        </div>

        <div class="admin-settings__members">
          ${buildAdminSettingsMembersMarkup()}
        </div>
      </div>

      ${state.adminAddMemberOpen ? buildAdminAddMemberModalMarkup() : ""}
    </section>`;
}

function buildAdminTicketDetailMarkup() {
  const ticketData = getTicketDataForOrder(
    state.tableNumber,
    state.tableOrders.get(state.tableNumber) || [],
  );

  if (!ticketData) {
    return `
      <article class="admin-ticket-card">
        <div class="admin-ticket-card__header">
          <span>Table ${escapeHtml(String(state.tableNumber))}</span>
          <span>00:00:00</span>
        </div>
        <div class="admin-ticket-card__empty">NA</div>
      </article>`;
  }

  return `
    <article class="admin-ticket-card" data-admin-ticket-table="${escapeHtml(String(ticketData.tableNumber))}">
      <div class="admin-ticket-card__header${ticketData.isNew ? "" : " admin-ticket-card__header--live"}">
        <span>Table ${escapeHtml(String(ticketData.tableNumber))}</span>
        <span data-admin-ticket-time>${escapeHtml(formatElapsedTime(Date.now() - ticketData.receivedAt))}</span>
      </div>
      <div class="admin-ticket-card__columns" aria-hidden="true">
        <div>Items</div>
        <div class="admin-ticket-card__column--qty">Qty</div>
      </div>
      <div class="admin-ticket-card__list">
        ${ticketData.items
          .map((item, index) => {
            const isSelected = index === 0;
            return `
              <div class="admin-ticket-card__item${isSelected ? " admin-ticket-card__item--selected" : ""}">
                <div class="admin-ticket-card__item-main">
                  <div>${escapeHtml(`${index + 1}. ${item.dishName}`)}</div>
                  <div class="admin-ticket-card__qty">${escapeHtml(String(item.quantity))}</div>
                </div>
                ${
                  item.note
                    ? `<div class="admin-ticket-card__note-row">
                        <div class="admin-ticket-card__note">${escapeHtml(item.note)}</div>
                      </div>`
                    : ""
                }
              </div>`;
          })
          .join("")}
      </div>
    </article>`;
}

function syncAdminTableColors() {
  if (!elements.adminMain) return;

  elements.adminMain.querySelectorAll("[data-admin-table]").forEach((button) => {
    const tableNumber = Number(button.dataset.adminTable);
    if (!Number.isFinite(tableNumber)) return;
    const tableVisualState = getCaptainTableVisualState(tableNumber);
    applyTableVisualState(button, tableVisualState.state, tableNumber, {
      hasReadyDot: tableVisualState.hasReadyDot,
    });
  });
}

function updateAdminTicketTimers() {
  if (!elements.adminMain || state.page !== "admin" || state.adminView !== "table-detail") {
    return;
  }

  const timeElement = elements.adminMain.querySelector("[data-admin-ticket-time]");
  if (!timeElement) return;

  const ticketData = getTicketDataForOrder(
    state.tableNumber,
    state.tableOrders.get(state.tableNumber) || [],
  );
  if (!ticketData) return;

  timeElement.textContent = formatElapsedTime(Date.now() - ticketData.receivedAt);
}

function renderAdmin() {
  if (!elements.adminMain || !elements.adminSidebar) return;

  if (elements.adminTitle) {
    elements.adminTitle.textContent = getAdminTitle();
  }

  if (state.adminView !== "settings") {
    state.adminAddMemberOpen = false;
  }

  elements.adminSidebar.classList.toggle("admin-sidebar--settings", state.adminView === "settings");
  elements.adminSidebar.innerHTML = buildAdminSidebarMarkup();

  if (state.adminView === "dashboard") {
    elements.adminMain.innerHTML = buildAdminDashboardMarkup();
  } else if (state.adminView === "tables" || state.adminView === "tickets") {
    elements.adminMain.innerHTML = buildAdminTableGridMarkup();
    syncAdminTableColors();
  } else if (state.adminView === "attendance") {
    elements.adminMain.innerHTML = buildAdminAttendanceMarkup();
  } else if (state.adminView === "table-detail") {
    elements.adminMain.innerHTML = buildAdminTicketDetailMarkup();
    updateAdminTicketTimers();
  } else if (state.adminView === "settings") {
    elements.adminMain.innerHTML = buildAdminSettingsMarkup();
  } else {
    elements.adminMain.innerHTML = '<div class="admin-main__empty">NA</div>';
  }
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
    !isAdminTicketReadOnly() &&
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

  syncBodyModalOpen();
}

function openTicketsActionPopup(tableNumber, index, mode, anchorElement) {
  if (isAdminTicketReadOnly()) return;
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

  if (acceptance !== "delivered") {
    orderItem.captainDeliveredAt = null;
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

function renderKitchenStatusDependents() {
  renderCaptain();
  renderAdmin();
  renderSousChef();
  renderTickets();
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

function goToTicketsTableOverview() {
  clearTicketsActionState();
  state.ticketsViewMode = "overview";
  state.ticketsSelectedCategory = null;
  state.ticketsSidebarCollapsed = false;

  if (state.ticketsBackRoute === "admin") {
    setRoute("admin-tables", state.tableNumber);
    return;
  }

  goToChefTableOverview();
}

function openTicketOverviewTable(ticketCard) {
  if (isAdminTicketReadOnly()) return;

  if (state.ticketsBackRoute !== "admin") {
    goToChefTableOverview();
    return;
  }

  const tableNumber = Number(ticketCard?.dataset.ticketTable);
  if (Number.isFinite(tableNumber) && tableNumber > 0) {
    setRoute("admin-table-detail", tableNumber);
  }
}

function applyTicketsAcceptance(acceptance) {
  if (isAdminTicketReadOnly()) {
    clearTicketsActionState();
    renderTickets();
    return;
  }

  if (!Number.isInteger(state.ticketsActionTableNumber) || !Number.isInteger(state.ticketsActionIndex)) {
    return;
  }

  setTicketAcceptance(state.ticketsActionTableNumber, state.ticketsActionIndex, acceptance);
  clearTicketsActionState();
  renderKitchenStatusDependents();
}

function confirmTicketsDelivery() {
  if (isAdminTicketReadOnly()) {
    clearTicketsActionState();
    renderTickets();
    return;
  }

  if (!Number.isInteger(state.ticketsActionTableNumber) || !Number.isInteger(state.ticketsActionIndex)) {
    return;
  }

  const tableNumber = state.ticketsActionTableNumber;
  const orderItems = getTicketOrderItems(tableNumber);
  const activeItem = orderItems?.[state.ticketsActionIndex];
  if (!activeItem || activeItem.acceptance !== "out") return;

  setTicketAcceptance(tableNumber, state.ticketsActionIndex, "delivered");
  clearTicketsActionState();
  renderKitchenStatusDependents();
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

  if (elements.orderClose) {
    elements.orderClose.hidden = !isPaymentPendingOrder(state.order);
  }

  if (elements.orderShare) {
    elements.orderShare.disabled = orderIsShared;
    elements.orderShare.textContent = orderIsShared ? "Shared" : "Share";
    elements.orderShare.classList.toggle("order-share--shared", orderIsShared);
    elements.orderShare.setAttribute("aria-disabled", orderIsShared ? "true" : "false");
  }

  persistCurrentOrder();
  syncDishPopup();
  syncPaymentCloseModal();
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
      renderCaptain();
      goToChefTableOverview();
      return;
    }

    renderBill();
    renderKitchenStatusDependents();
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
    const tableVisualState = getCaptainTableVisualState(tableNumber);
    applyTableVisualState(button, tableVisualState.state, tableNumber, {
      hasReadyDot: tableVisualState.hasReadyDot,
    });
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
    applyTableVisualState(button, getSousChefTableVisualState(tableNumber), tableNumber);
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
    elements.ticketsShell.classList.toggle("tickets-shell--readonly", isAdminTicketReadOnly());
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
    const stoppedAtValue = ticketRow?.dataset.ticketItemStop;
    const stoppedAt =
      stoppedAtValue === undefined || stoppedAtValue === "" ? null : Number(stoppedAtValue);
    if (!Number.isFinite(receivedAt)) return;

    timeElement.textContent = formatElapsedTime((Number.isFinite(stoppedAt) ? stoppedAt : now) - receivedAt);
  });
}

function renderActiveOrderView() {
  if (state.page === "admin") {
    renderAdmin();
    return;
  }

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
  const protectedTarget =
    route.page === "admin" || route.page === "captain" || route.page === "sous-chef"
      ? route.page
      : null;

  if (protectedTarget && !isUserAuthorizedForTarget(state.currentUser, protectedTarget)) {
    openLoginForTarget(protectedTarget, { replace: true });
    return;
  }

  if (route.page === "login" && state.currentUser) {
    setRoute("home", state.tableNumber, { replace: true });
    return;
  }

  if (wasOrderRoute && (previousPage !== route.page || previousTableNumber !== route.tableNumber)) {
    persistCurrentOrder();
  }

  state.page = route.page;
  state.loginTarget = route.loginTarget || state.loginTarget;
  state.adminView = route.adminView || state.adminView || "dashboard";

  if (route.page === "admin" && Number.isFinite(route.tableNumber)) {
    state.tableNumber = route.tableNumber;
  }

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
    resetPaymentCloseForm();
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
    resetPaymentCloseForm();
    if (wasOrderRoute) {
      state.order = [];
    }
  }

  showPage(route.page);
  syncDishPopup();
  syncPaymentCloseModal();

  if (route.page === "login") {
    renderLogin();
  } else if (route.page === "menu") {
    renderMenu();
  } else if (route.page === "bill") {
    renderBill();
  } else if (route.page === "captain-bill") {
    renderCaptainBill();
  } else if (route.page === "captain-delivery") {
    renderCaptainDelivery();
  } else if (route.page === "admin") {
    renderAdmin();
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
    if (target === "home") {
      state.currentUser = null;
      state.loginTarget = null;
      state.loginError = "";
      state.adminAddMemberOpen = false;
      setRoute("home");
      return;
    }

    if (target === "tickets-back") {
      if (state.ticketsBackRoute === "admin") {
        setRoute("admin", state.tableNumber);
      } else {
        goToChefTableOverview();
      }
      return;
    }

    if (requiresLogin(target) && !isUserAuthorizedForTarget(state.currentUser, target)) {
      openLoginForTarget(target);
      return;
    }

    if (target === "tickets") {
      state.ticketsBackRoute = state.page === "admin" ? "admin" : "sous-chef";
      state.ticketsViewMode = "overview";
      state.ticketsSelectedCategory = null;
    } else if (target === "sous-chef") {
      goToChefTableOverview();
      return;
    }
    setRoute(target === "home" ? "home" : target, state.tableNumber);
  });
}

if (elements.loginForm) {
  elements.loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(elements.loginForm);
    const username = String(formData.get("username") || "");
    const password = String(formData.get("password") || "");
    const loginTarget = state.loginTarget || "admin";
    const member = findMemberForLogin(loginTarget, username, password);

    if (!member) {
      state.loginError = "Invalid username or password";
      renderLogin();
      elements.loginPassword?.focus();
      return;
    }

    state.currentUser = member;
    state.loginError = "";
    elements.loginForm.reset();
    setRoute(loginTarget, state.tableNumber, { replace: true });
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

if (elements.adminSidebar) {
  elements.adminSidebar.addEventListener("click", (event) => {
    const logoutButton = event.target.closest("[data-admin-logout]");
    if (logoutButton) {
      state.currentUser = null;
      state.loginTarget = null;
      state.loginError = "";
      state.adminAddMemberOpen = false;
      setRoute("home");
      return;
    }

    const routeButton = event.target.closest("[data-admin-route]");
    if (!routeButton) return;
    const targetRoute = routeButton.dataset.adminRoute;
    state.adminAddMemberOpen = false;
    if (targetRoute === "tickets" || targetRoute === "admin-tickets") {
      clearTicketsActionState();
      state.ticketsBackRoute = "admin";
      state.ticketsViewMode = "overview";
      state.ticketsSelectedCategory = null;
      setRoute("tickets", state.tableNumber);
      return;
    }
    setRoute(targetRoute, state.tableNumber);
  });
}

if (elements.adminMain) {
  elements.adminMain.addEventListener("click", (event) => {
    const tableButton = event.target.closest("[data-admin-table]");
    if (tableButton) {
      const tableNumber = Number(tableButton.dataset.adminTable);
      if (Number.isFinite(tableNumber)) {
        setRoute("admin-table-detail", tableNumber);
      }
      return;
    }

    const settingsRoleButton = event.target.closest("[data-admin-settings-role]");
    if (settingsRoleButton) {
      const roleId = settingsRoleButton.dataset.adminSettingsRole;
      if (!adminSettingsRoles.some((role) => role.id === roleId)) return;

      state.adminSettingsRole = roleId;
      state.adminAddMemberOpen = false;
      renderAdmin();
      return;
    }

    const addMemberOpenButton = event.target.closest("[data-admin-add-member-open]");
    if (addMemberOpenButton) {
      state.adminAddMemberOpen = true;
      renderAdmin();
      elements.adminMain.querySelector('input[name="name"]')?.focus();
      return;
    }

    const addMemberCloseButton = event.target.closest("[data-admin-add-member-close]");
    if (addMemberCloseButton) {
      state.adminAddMemberOpen = false;
      renderAdmin();
      return;
    }

    const memberDeleteButton = event.target.closest("[data-admin-member-delete]");
    if (memberDeleteButton) {
      const memberIndex = Number(memberDeleteButton.dataset.adminMemberDelete);
      const members = adminMembersByRole[state.adminSettingsRole] || [];

      if (Number.isFinite(memberIndex) && members[memberIndex]) {
        const [removedMember] = members.splice(memberIndex, 1);
        if (removedMember) {
          adminAttendanceByUsername.delete(normalizeUsername(removedMember.username));
          deleteAdminMemberFromDatabase(removedMember);
        }
        renderAdmin();
      }
      return;
    }

    const attendanceStatusButton = event.target.closest("[data-admin-attendance-status]");
    if (attendanceStatusButton) {
      const rowIndex = Number(attendanceStatusButton.dataset.adminAttendanceStatus);
      const row = getAdminAttendanceRows()[rowIndex];
      const status = attendanceStatusButton.dataset.adminStatus;

      if (!row || (status !== "present" && status !== "absent")) return;

      const attendance = getAttendanceRecord(row.username);
      attendance.status = status;
      state.adminAttendanceDropdownIndex = null;
      if (status === "present") {
        attendance.checkIn = formatCurrentAdminTime();
      }
      renderAdmin();
      return;
    }

    const attendanceToggleButton = event.target.closest("[data-admin-attendance-toggle]");
    if (attendanceToggleButton) {
      const rowIndex = Number(attendanceToggleButton.dataset.adminAttendanceToggle);
      if (!Number.isFinite(rowIndex) || !getAdminAttendanceRows()[rowIndex]) return;

      state.adminAttendanceDropdownIndex =
        state.adminAttendanceDropdownIndex === rowIndex ? null : rowIndex;
      renderAdmin();
      return;
    }

    const timeButton = event.target.closest("[data-admin-attendance-time-open]");
    if (timeButton) {
      const pickerId = timeButton.dataset.adminAttendanceTimeOpen;
      const timeInput = Array.from(
        elements.adminMain.querySelectorAll("[data-admin-attendance-time-input]"),
      ).find((input) => input.dataset.adminAttendanceTimeInput === pickerId);

      openNativePicker(timeInput);
      return;
    }

    const dateButton = event.target.closest("[data-admin-date-shift]");
    if (dateButton) {
      const dayShift = Number(dateButton.dataset.adminDateShift);
      if (!Number.isFinite(dayShift)) return;

      const nextDate = new Date(state.adminDate);
      nextDate.setDate(nextDate.getDate() + dayShift);
      state.adminDate = nextDate;
      renderAdmin();
      return;
    }

    const datePicker = event.target.closest("[data-admin-date-picker]");
    if (datePicker) {
      openNativePicker(datePicker.querySelector("[data-admin-date-input]"));
    }
  });

  elements.adminMain.addEventListener("change", (event) => {
    const dateInput = event.target.closest("[data-admin-date-input]");
    if (dateInput) {
      if (!dateInput.value) return;

      const nextDate = new Date(`${dateInput.value}T00:00:00`);
      if (Number.isNaN(nextDate.getTime())) return;

      state.adminDate = nextDate;
      renderAdmin();
      return;
    }

    const timeInput = event.target.closest("[data-admin-attendance-time-input]");
    if (!timeInput) return;

    const [rowIndexText, field] = timeInput.dataset.adminAttendanceTimeInput.split(":");
    const row = getAdminAttendanceRows()[Number(rowIndexText)];
    if (!row || (field !== "checkIn" && field !== "checkOut")) return;

    const displayValue = formatAdminTimeForDisplay(timeInput.value);
    if (!displayValue) return;

    getAttendanceRecord(row.username)[field] = displayValue;
    renderAdmin();
  });

  elements.adminMain.addEventListener("submit", (event) => {
    const memberForm = event.target.closest("[data-admin-member-form]");
    if (!memberForm) return;

    event.preventDefault();

    const formData = new FormData(memberForm);
    const name = String(formData.get("name") || "").trim();
    const username = String(formData.get("username") || "").trim();
    const password = String(formData.get("password") || "").trim();

    if (!name || !username || password.length !== 5) return;
    if (getAllAdminMembers().some((member) => normalizeUsername(member.username) === normalizeUsername(username))) {
      return;
    }

    const members = adminMembersByRole[state.adminSettingsRole] || [];
    const member = { name, username, password, id: null };
    members.push(member);
    adminMembersByRole[state.adminSettingsRole] = members;
    persistAdminMemberToDatabase(member, state.adminSettingsRole);
    state.adminAddMemberOpen = false;
    renderAdmin();
  });
}

document.addEventListener("click", (event) => {
  if (state.adminAttendanceDropdownIndex === null || state.page !== "admin") return;
  if (!(event.target instanceof Element)) return;
  if (event.target.closest("[data-admin-attendance-dropdown]")) return;
  if (elements.adminMain?.contains(event.target)) return;

  state.adminAttendanceDropdownIndex = null;
  if (state.adminView === "attendance") {
    renderAdmin();
  }
});

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

if (elements.orderClose) {
  elements.orderClose.addEventListener("click", openPaymentClosePopup);
}

if (elements.paymentCloseModal) {
  elements.paymentCloseModal.addEventListener("click", (event) => {
    if (
      event.target === elements.paymentCloseModal ||
      event.target.closest("[data-payment-close-dismiss]")
    ) {
      closePaymentClosePopup();
    }
  });
}

if (elements.paymentMethod) {
  elements.paymentMethod.addEventListener("change", (event) => {
    state.paymentMethod = event.target.value;
    if (!state.paymentMethod) {
      state.paymentReceiptFileName = "";
      if (elements.paymentReceipt) {
        elements.paymentReceipt.value = "";
      }
    }
    syncPaymentCloseModal();
  });
}

if (elements.paymentReceipt) {
  elements.paymentReceipt.addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    state.paymentReceiptFileName = file?.name || "";
    syncPaymentCloseModal();
  });
}

if (elements.paymentCloseConfirm) {
  elements.paymentCloseConfirm.addEventListener("click", completePaymentClose);
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
    goToTicketsTableOverview();
  });
}

if (elements.sousChefLiveCategories) {
  elements.sousChefLiveCategories.addEventListener("click", (event) => {
    const categoryButton = event.target.closest("[data-sous-chef-category-select]");
    if (!categoryButton) return;

    const categoryName = categoryButton.dataset.sousChefCategorySelect;
    if (!categoryName) return;

    clearTicketsActionState();
    state.ticketsBackRoute = "sous-chef";
    state.ticketsViewMode = "category";
    state.ticketsSelectedCategory = categoryName;
    state.ticketsSidebarCollapsed = false;

    setRoute("tickets");
  });
}

if (elements.ticketsList) {
  elements.ticketsList.addEventListener("click", (event) => {
    const actionTarget = event.target.closest(
      "[data-ticket-overview-edit], [data-ticket-reject], [data-ticket-accept], [data-ticket-deliver], [data-ticket-reset]",
    );
    if (isAdminTicketReadOnly() && actionTarget) {
      return;
    }

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
      openTicketOverviewTable(overviewCard);
      return;
    }

    const rejectButton = event.target.closest("[data-ticket-reject]");
    if (rejectButton) {
      clearTicketsActionState();
      setTicketAcceptance(Number(rejectButton.dataset.ticketTable), Number(rejectButton.dataset.ticketReject), "rejected");
      renderKitchenStatusDependents();
      return;
    }

    const acceptButton = event.target.closest("[data-ticket-accept]");
    if (acceptButton) {
      clearTicketsActionState();
      setTicketAcceptance(Number(acceptButton.dataset.ticketTable), Number(acceptButton.dataset.ticketAccept), "out");
      renderKitchenStatusDependents();
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
    renderKitchenStatusDependents();
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
        state.order[orderIndex].captainDeliveredAt = null;
        if (state.billDeliveryPromptIndex === orderIndex) {
          state.billDeliveryPromptIndex = null;
        }
        persistCurrentOrder();
        renderBill();
        renderKitchenStatusDependents();
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
        state.order[orderIndex].captainDeliveredAt = null;
        state.billDeliveryPromptIndex = null;
        persistCurrentOrder();
        renderBill();
        renderKitchenStatusDependents();
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
      state.order[orderIndex].captainDeliveredAt = null;
      if (state.billDeliveryPromptIndex === orderIndex) {
        state.billDeliveryPromptIndex = null;
      }
      persistCurrentOrder();
      renderBill();
      renderKitchenStatusDependents();
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
  if (event.key !== "Escape") return;

  if (state.paymentCloseOpen) {
    closePaymentClosePopup();
    return;
  }

  if (state.selectedDish) {
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

  if (state.page === "admin") {
    updateAdminTicketTimers();
  }

  if (state.page === "captain-delivery" && elements.captainDeliveryList) {
    updateCaptainDeliveryTimers();
  }
}, 1000);

(async () => {
  await hydrateUsersFromDatabase().catch((error) => {
    console.warn("User hydration failed:", error);
  });
  ensureDefaultAdminMember();

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
