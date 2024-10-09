CREATE TABLE IF NOT EXISTS "analytics" (
	"id" integer PRIMARY KEY NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"isDummy" boolean,
	"userId" text,
	"action" text NOT NULL,
	"metadata" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "attendance" (
	"id" text PRIMARY KEY NOT NULL,
	"attendedAt" timestamp NOT NULL,
	"userId" text,
	"consultationId" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "blogs" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"content" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp NOT NULL,
	"isDummy" boolean,
	"categories" text,
	"media" text,
	"videoUrl" text,
	"tags" text,
	"authorId" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "consultations" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text,
	"description" text,
	"schedule" timestamp NOT NULL,
	"endDate" timestamp,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp NOT NULL,
	"isDummy" boolean,
	"sessions" integer,
	"packageType" text,
	"instructorId" text,
	"availableDates" text[],
	"recurrencePattern" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "instructors" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp NOT NULL,
	"isDummy" boolean,
	"profileImage" text,
	"specialization" text,
	"phone" text,
	"bio" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "posts" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text,
	"content" text,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp NOT NULL,
	"isDummy" boolean,
	"userId" text,
	"categories" text,
	"media" text,
	"videoUrl" text,
	"tags" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_metrics" (
	"id" text PRIMARY KEY NOT NULL,
	"consultationsAttended" integer,
	"postsCreated" integer,
	"commentsMade" integer,
	"lastActive" timestamp NOT NULL,
	"userId" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"username" text,
	"email" text NOT NULL,
	"emailVerified" timestamp NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp NOT NULL,
	"isDummy" boolean,
	"provider" text,
	"providerId" text,
	"image" text,
	"accessToken" text,
	"role" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "analytics" ADD CONSTRAINT "analytics_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "attendance" ADD CONSTRAINT "attendance_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "attendance" ADD CONSTRAINT "attendance_consultationId_consultations_id_fk" FOREIGN KEY ("consultationId") REFERENCES "public"."consultations"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "blogs" ADD CONSTRAINT "blogs_authorId_users_id_fk" FOREIGN KEY ("authorId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "consultations" ADD CONSTRAINT "consultations_instructorId_instructors_id_fk" FOREIGN KEY ("instructorId") REFERENCES "public"."instructors"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts" ADD CONSTRAINT "posts_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_metrics" ADD CONSTRAINT "user_metrics_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
