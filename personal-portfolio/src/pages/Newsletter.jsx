import FirstCard from "../components/Newsletter/FirstCard.jsx"
import SecondCard from "../components/Newsletter/SecondCard.jsx"


export default function Newsletter(){
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