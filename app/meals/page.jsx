import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/MealsGrid/MealsGrid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function AllMeals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />;
}
export default function Meals() {
    return (
        <>
            <header className={classes.header}>
                <h1>Delicious Meals, created</h1>

                <p>
                    Choose your favourite recipe and cook it yourself. It&apos;s is easy
                    and fun
                </p>

                <p className={classes.cta}>
                    <Link href={"/meals/share"}> Share Your Favourite Recipe</Link>
                </p>
            </header>

            <main className={classes.main}>
                <Suspense
                    fallback={<h3 className={classes.loading}>Fetching Meals...</h3>}
                >
                    <AllMeals />
                </Suspense>
            </main>
        </>
    );
}
