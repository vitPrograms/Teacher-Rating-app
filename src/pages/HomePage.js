import { useEffect } from "react";
import CurrentEvent from "../components/event/CurrentEvent"
import TeachersPage from "./TeachersPage";

export default function HomePage() {

    return (
        <>
            <CurrentEvent />
            <TeachersPage />
        </>
    )
}