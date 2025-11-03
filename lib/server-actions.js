"use server";
export const shareMeal = async (formData) => {
    const meal = {
        title: formData.get("title"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        image: formData.get("image"),
        name: formData.get("name"),
        email: formData.get("email"),
    };
    console.log("meal is: ", meal);
};
