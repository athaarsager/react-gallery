CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" ("url", "title", "description", "likes")
VALUES   ('images/fira_caldera.jpeg', 'Fira Caldera', 'View from Fira of the Santorini Caldera', 0),
         ('images/great_library_in_ephesus.jpeg', 'Great Library in Ephesus', 'Photo of the great library in Ephesus, Turkey. One of the greatest libraries of the ancient world.', 0),
         ('images/marimba.jpeg', 'Me on Marimba!', 'Me playing the Sejourne Marimba Concerto at my Senior Recital', 0),
         ('images/graduation.jpeg', 'College Graduation!', 'Me on graduation day, standing next to Dr. Eyler, my percussion professor', 0),
         ('images/cool_drumming_photo.jpeg', 'Cool Drumming Photo', 'A stylized photo of me drumming at one of my first gigs with Short Notice', 0),
         ('images/the_band.jpeg', 'Photo of Short Notice', 'A classy photo of the members of my cover band, Short Notice', 0);
  