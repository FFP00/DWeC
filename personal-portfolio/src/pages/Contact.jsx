import FirstCard from "../components/Contact/FirstCard.jsx"
import SecondCard from "../components/Contact/SecondCard.jsx"

export default function Contact(){
    return(
        <>
            <main className="py-5">
                <div className="container">
                <div className="row g-5">
                    <FirstCard />
                    <SecondCard />
                </div>
                </div>
            </main>
        </>
    )
}