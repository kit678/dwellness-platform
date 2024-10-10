CREATE TABLE IF NOT EXISTS "accounts" (
	"userId" text NOT NULL,
	"type" text NOT NULL,
	"provider" text NOT NULL,
	"providerAccountId" text NOT NULL,
	"refresh_token" text,
	"refresh_token_expires_in" integer,
	"access_token" text,
	"expires_at" integer,
	"token_type" text,
	"scope" text,
	"id_token" text,
	"session_state" text,
	"oauth_token_secret" text,
	"oauth_token" text,
	CONSTRAINT "accounts_provider_providerAccountId_pk" PRIMARY KEY("provider","providerAccountId")
);
--> statement-breakpoint
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
	"updatedAt" timestamp DEFAULT now() NOT NULL,
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
	"end_date" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"is_dummy" boolean,
	"sessions" integer,
	"package_type" text,
	"instructor_id" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "examples" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"description" text,
	"domainCount" integer,
	"url" text,
	"image" text,
	"imageBlurhash" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "instructors" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"is_dummy" boolean,
	"profile_image" text,
	"specialization" text,
	"phone" text,
	"bio" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "posts" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text,
	"description" text,
	"content" text,
	"slug" text NOT NULL,
	"image" text,
	"imageBlurhash" text,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	"published" boolean DEFAULT false NOT NULL,
	"siteId" text,
	"userId" text,
	"categories" text,
	"media" text,
	"videoUrl" text,
	"tags" text,
	"consultationsAttended" integer,
	"postsCreated" integer,
	"commentsMade" integer,
	"lastActive" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sessions" (
	"sessionToken" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"expires" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sites" (
	"id" text PRIMARY KEY DEFAULT 'zxlf3au7qaakdzebtskaen0v' NOT NULL,
	"name" text,
	"description" text,
	"logo" text DEFAULT 'https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/JRajRyC-PhBHEinQkupt02jqfKacBVHLWJq7Iy.png',
	"font" text DEFAULT 'font-cal' NOT NULL,
	"image" text DEFAULT 'https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/hxfcV5V-eInX3jbVUhjAt1suB7zB88uGd1j20b.png',
	"imageBlurhash" text DEFAULT 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAhCAYAAACbffiEAAAACXBIWXMAABYlAAAWJQFJUiTwAAABfUlEQVR4nN3XyZLDIAwE0Pz/v3q3r55JDlSBplsIEI49h76k4opexCK/juP4eXjOT149f2Tf9ySPgcjCc7kdpBTgDPKByKK2bTPFEdMO0RDrusJ0wLRBGCIuelmWJAjkgPGDSIQEMBDCfA2CEPM80+Qwl0JkNxBimiaYGOTUlXYI60YoehzHJDEm7kxjV3whOQTD3AaCuhGKHoYhyb+CBMwjIAFz647kTqyapdV4enGINuDJMSScPmijSwjCaHeLcT77C7EC0C1ugaCTi2HYfAZANgj6Z9A8xY5eiYghDMNQBJNCWhASot0jGsSCUiHWZcSGQjaWWCDaGMOWnsCcn2QhVkRuxqqNxMSdUSElCDbp1hbNOsa6Ugxh7xXauF4DyM1m5BLtCylBXgaxvPXVwEoOBjeIFVODtW74oj1yBQah3E8tyz3SkpolKS9Geo9YMD1QJR1Go4oJkgO1pgbNZq0AOUPChyjvh7vlXaQa+X1UXwKxgHokB2XPxbX+AnijwIU4ahazAAAAAElFTkSuQmCC',
	"subdomain" text,
	"customDomain" text,
	"message404" text DEFAULT 'Blimey! You''ve found a page that doesn''t exist.',
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	"userId" text,
	CONSTRAINT "sites_subdomain_unique" UNIQUE("subdomain"),
	CONSTRAINT "sites_customDomain_unique" UNIQUE("customDomain")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_metrics" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text,
	"consultationsAttended" integer,
	"postsCreated" integer,
	"commentsMade" integer,
	"lastActive" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"username" text,
	"email" text NOT NULL,
	"email_verified" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"is_dummy" boolean,
	"provider" text,
	"provider_id" text,
	"image" text,
	"access_token" text,
	"role" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "verificationTokens" (
	"identifier" text NOT NULL,
	"token" text NOT NULL,
	"expires" timestamp NOT NULL,
	CONSTRAINT "verificationTokens_identifier_token_pk" PRIMARY KEY("identifier","token"),
	CONSTRAINT "verificationTokens_token_unique" UNIQUE("token")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "accounts" ADD CONSTRAINT "accounts_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
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
 ALTER TABLE "consultations" ADD CONSTRAINT "consultations_instructor_id_instructors_id_fk" FOREIGN KEY ("instructor_id") REFERENCES "public"."instructors"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts" ADD CONSTRAINT "posts_siteId_sites_id_fk" FOREIGN KEY ("siteId") REFERENCES "public"."sites"("id") ON DELETE cascade ON UPDATE cascade;
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
 ALTER TABLE "sessions" ADD CONSTRAINT "sessions_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sites" ADD CONSTRAINT "sites_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_metrics" ADD CONSTRAINT "user_metrics_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "accounts_userId_index" ON "accounts" USING btree ("userId");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "posts_slug_siteId_index" ON "posts" USING btree ("slug","siteId");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "sessions_userId_index" ON "sessions" USING btree ("userId");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "sites_userId_index" ON "sites" USING btree ("userId");