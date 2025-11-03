"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function validatInput(text) {
    return !text || text.trim().length === 0;
}

export const shareMeal = async (prevState, formData) => {
    const meal = {
        title: formData.get("title"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        image: formData.get("image"),
        creator: formData.get("name"),
        creator_email: formData.get("email"),
    };

    if (validatInput(meal.title) ||
        validatInput(meal.summary) ||
        validatInput(meal.instructions) || validatInput(meal.creator) ||
        validatInput(meal.creator_email) ||
        (!meal.image || meal.image.size === 0) || (!meal.creator_email.includes("@"))) {
        return { message: "Invalid input - please check your data." };
    }
    await saveMeal(meal);
    revalidatePath("/meals")
    redirect("/meals");
};
