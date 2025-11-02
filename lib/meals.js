import sql from "better-sqlite3";

const db = sql("meals.db");
// Get All Meals
export async function getMeals() {
  await new Promise((resolve, reject) => setTimeout(resolve, 5000));
  // throw new Error("Failed to fetch meals data");
  return db.prepare("SELECT * FROM meals").all();
}

// Get Meal by ID
export function getMealById(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}