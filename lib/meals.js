import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

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

// Save New Meal:
export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const imageFileName = `${meal.slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${imageFileName}`);

  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Storing image failed");
    }
  });
  meal.image = `/images/${imageFileName}`;

  db.prepare(
    `INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug)
      VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
    )`
  ).run(meal);
}
