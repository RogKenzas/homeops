import { useEffect, useState } from 'react'
import '../Style/app_ctn.css'
import { getRoute, type RouteName } from '../routers/route'
import DashHme from './dash_hme';
import PlanHme from './plan_hme';
import TaskHme from './task_hme';

export default function AppCtn() {

    const [route, setRoute] = useState<RouteName>(getRoute());

    useEffect(() => {
        const onChange = () => setRoute(getRoute());
        window.addEventListener("route-change", onChange);
        window.addEventListener("popstate", onChange);

        return (() => {
            window.removeEventListener("route-change", onChange);
            window.removeEventListener("popstate", onChange);
        })
    }, []);

    const renderPage = () => {
        switch (route) {
            case "task":
                return <TaskHme/>; 
            case "plans":
                return <PlanHme />;
            default:
                return <DashHme />
        }
    };

    return (
        <div className="ctn__app">
            <div className="ctn__main__app">
                {renderPage()}
            </div>
        </div>
    )
}


