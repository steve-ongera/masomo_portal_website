const ICONS = {
// General
book: "bi-book",
users: "bi-people",
clock: "bi-clock",
arrow: "bi-arrow-right",
check: "bi-check-lg",
quote: "bi-quote",

// Contact
mail: "bi-envelope",
phone: "bi-telephone",
pin: "bi-geo-alt",
msg: "bi-chat-dots",
world: "bi-globe",
cal: "bi-calendar-event",
bell: "bi-bell",
heart: "bi-heart",

// Social media
x: "bi-twitter-x",
linkedin: "bi-linkedin",
github: "bi-github",
youtube: "bi-youtube",

// Achievements and ratings
award: "bi-award",
star: "bi-star-fill",
play: "bi-play-fill",
circle: "bi-circle-fill",

// Software and projects
code: "bi-code-slash",
projects: "bi-kanban",
folder: "bi-folder2-open",
briefcase: "bi-briefcase",
laptop: "bi-laptop",
website: "bi-globe2",
grid: "bi-grid",
settings: "bi-gear",
search: "bi-search",

// School management
school: "bi-mortarboard",
student: "bi-person-workspace",
teacher: "bi-person-video3",
classroom: "bi-easel",
library: "bi-journal-bookmark",
exam: "bi-file-earmark-text",
results: "bi-clipboard-check",
attendance: "bi-calendar-check",
timetable: "bi-calendar3",
fees: "bi-cash-stack",
payment: "bi-credit-card",
report: "bi-file-earmark-bar-graph",
parent: "bi-people",
graduation: "bi-mortarboard-fill",
admission: "bi-person-plus",
certificate: "bi-patch-check",
announcement: "bi-megaphone",
portal: "bi-window",
admin: "bi-person-gear",

// Navigation
menu: "bi-list",
close: "bi-x-lg",
home: "bi-house",
dashboard: "bi-speedometer2",
external: "bi-box-arrow-up-right",
link: "bi-link-45deg",

// User actions
user: "bi-person",
document: "bi-file-earmark-text",
download: "bi-download",
upload: "bi-upload",
edit: "bi-pencil-square",
trash: "bi-trash",
plus: "bi-plus-lg",
minus: "bi-dash-lg",
send: "bi-send",
login: "bi-box-arrow-in-right",
logout: "bi-box-arrow-right",

// Security and status
shield: "bi-shield-check",
lock: "bi-lock",
checkCircle: "bi-check-circle",
info: "bi-info-circle",
warning: "bi-exclamation-triangle",
error: "bi-x-circle",
eye: "bi-eye",
eyeOff: "bi-eye-slash",

// Business and analytics
building: "bi-building",
cart: "bi-cart",
graph: "bi-graph-up-arrow",
analytics: "bi-bar-chart",
support: "bi-headset",
image: "bi-image",
chat: "bi-chat",
location: "bi-geo-alt",
creditCard: "bi-credit-card",
starOutline: "bi-star",
};

export default function Icon({
name,
size = 16,
className = "",
}) {
const iconClass = ICONS[name];

if (!iconClass) {
console.warn(`Icon "${name}" is not defined in ICONS.`);
return null;
}

return (
<i
className={`bi ${iconClass} ${className}`.trim()}
style={{
fontSize: typeof size === "number" ? `${size}px` : size,
lineHeight: 1,
display: "inline-block",
verticalAlign: "middle",
}}
aria-hidden="true"
/>
);
}
