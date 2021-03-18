select "films"."releaseYear",
       "categories"."name" as "category name"
  from "films"
  join "filmCategory" using ("filmId")
  join "categories" using ("categoryId")
 where "films"."title" = 'Boogie Amelie';
