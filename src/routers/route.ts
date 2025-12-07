export type RouteName = "dash" | "task" | "plans"

export const getRoute = (): RouteName => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page");

    switch (page) {
        case "task":
            return "task";
        case "plans":
            return "plans";
        case "dash":
        default:
            return "dash";
    }
};

export const navigate = (route: RouteName) => {
    const url = `/?page=${route}`;
    window.history.pushState({}, "", url);
    window.dispatchEvent(new Event("route-change"));
}