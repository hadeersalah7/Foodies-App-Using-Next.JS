import Link from "next/link";
import classes from "./page.module.css"
import MealsGrid from "@/components/MealsGrid/MealsGrid";
export default function Meals() {
    return (
        <>
            <header className={classes.header}>
                <h1>Delicious Meals, created</h1>

                <p>
                    Choose your favourite recipe and cook it yourself. It's is easy and
                    fun
                </p>

                <p className={classes.cta}>
                    <Link href={"/meals/share"}> Share Your Favourite Recipe</Link>
                </p>
            </header>

            <main className={classes.main}>
                <MealsGrid meals={[]} />
            </main>
        </>
    );
}
