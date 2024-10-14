CREATE TABLE IF NOT EXISTS "instagram_posts" (
	"id" text PRIMARY KEY NOT NULL,
	"caption" text NOT NULL,
	"media_url" text NOT NULL,
	"media_type" text NOT NULL,
	"timestamp" timestamp NOT NULL,
	"permalink" text,
	"username" text NOT NULL,
	"like_count" integer NOT NULL,
	"comments_count" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "sites" ALTER COLUMN "id" SET DEFAULT 'tfm4smp0c463t2zsac92npos';