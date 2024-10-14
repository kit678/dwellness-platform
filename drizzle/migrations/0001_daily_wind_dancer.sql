ALTER TABLE "sites" ALTER COLUMN "id" SET DEFAULT 's65ckkgwyv7xa5618w08xsyb';--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "excerpt" text;--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "author_name" text;--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "author_profile_image" text;--> statement-breakpoint
ALTER TABLE "consultations" ADD COLUMN "instructor_name" text;--> statement-breakpoint
ALTER TABLE "consultations" ADD COLUMN "instructor_profile_image" text;