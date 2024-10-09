import { createId } from "@paralleldrive/cuid2";
import { relations, Many, One } from "drizzle-orm"; // Updated
import {
  boolean,
  index,
  integer,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

// Define the users table
export const users = pgTable("users", {
  id: text("id").primaryKey(),
  name: text("name"),
  username: text("username"),
  email: text("email").notNull(),
  email_verified: timestamp("email_verified", { mode: "date" }).notNull(),
  created_at: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  updated_at: timestamp("updated_at", { mode: "date" }).notNull().$onUpdate(() => new Date()),
  is_dummy: boolean("is_dummy"),
  provider: text("provider"),
  provider_id: text("provider_id"),
  image: text("image"),
  access_token: text("access_token"),
  role: text("role"),
});

// Define the instructors table
export const instructors = pgTable("instructors", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  created_at: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  updated_at: timestamp("updated_at", { mode: "date" }).notNull().$onUpdate(() => new Date()),
  is_dummy: boolean("is_dummy"),
  profile_image: text("profile_image"),
  specialization: text("specialization"),
  phone: text("phone"),
  bio: text("bio"),
});

// Define the consultations table
export const consultations = pgTable("consultations", {
  id: text("id").primaryKey(),
  title: text("title"),
  description: text("description"),
  schedule: timestamp("schedule", { mode: "date" }).notNull(),
  end_date: timestamp("end_date", { mode: "date" }),
  created_at: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  updated_at: timestamp("updated_at", { mode: "date" }).notNull().$onUpdate(() => new Date()),
  is_dummy: boolean("is_dummy"),
  sessions: integer("sessions"),
  package_type: text("package_type"),
  instructor_id: text("instructor_id").references(() => instructors.id, { onDelete: "cascade", onUpdate: "cascade" }),
});

// Define the attendance table
export const attendance = pgTable("attendance", {
  id: text("id").primaryKey(),
  attendedAt: timestamp("attendedAt", { mode: "date" }).notNull(),
  userId: text("userId").references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" }),
  consultationId: text("consultationId").references(() => consultations.id, { onDelete: "cascade", onUpdate: "cascade" }),
});

// Define the posts table
export const posts = pgTable("posts", {
  id: text("id").primaryKey(),
  title: text("title"),
  description: text("description"), // Added
  content: text("content"),
  slug: text("slug").notNull(), // Added
  image: text("image"), // Added
  imageBlurhash: text("imageBlurhash"), // Added
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow().notNull(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).notNull().$onUpdate(() => new Date()),
  published: boolean("published").default(false).notNull(), // Added
  siteId: text("siteId").references(() => sites.id, { onDelete: "cascade", onUpdate: "cascade" }), // Added
  userId: text("userId").references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" }),
  categories: text("categories"),
  media: text("media"),
  videoUrl: text("videoUrl"),
  tags: text("tags"),
  consultationsAttended: integer("consultationsAttended"),
  postsCreated: integer("postsCreated"),
  commentsMade: integer("commentsMade"),
  lastActive: timestamp("lastActive", { mode: "date" }).notNull(),
});

// Define the blogs table
export const blogs = pgTable("blogs", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow().notNull(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).notNull().$onUpdate(() => new Date()),
  isDummy: boolean("isDummy"),
  categories: text("categories"),
  media: text("media"),
  videoUrl: text("videoUrl"),
  tags: text("tags"),
  authorId: text("authorId").references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" }),
});

// Define the analytics table
export const analytics = pgTable("analytics", {
  id: integer("id").primaryKey().notNull(),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow().notNull(),
  isDummy: boolean("isDummy"),
  userId: text("userId").references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" }),
  action: text("action").notNull(),
  metadata: text("metadata"),
  // ...(about 20 lines omitted)...
});

// Define the examples table
export const examples = pgTable("examples", {
  id: serial("id").primaryKey().notNull(),
  name: text("name"),
  description: text("description"),
  domainCount: integer("domainCount"),
  url: text("url"),
  image: text("image"),
  imageBlurhash: text("imageBlurhash"),
});

// Define the sessions table
export const sessions = pgTable("sessions", {
  sessionToken: text("sessionToken").primaryKey().notNull(),
  userId: text("userId").notNull().references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
}, (table) => {
  return {
    userIdIdx: index().on(table.userId),
  };
});

// Define the verificationTokens table
export const verificationTokens = pgTable("verificationTokens", {
  identifier: text("identifier").notNull(),
  token: text("token").notNull().unique(),
  expires: timestamp("expires", { mode: "date" }).notNull(),
}, (table) => {
  return {
    compositePk: primaryKey({ columns: [table.identifier, table.token] }),
  };
});

// Define the accounts table
export const accounts = pgTable("accounts", {
  userId: text("userId").notNull().references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" }),
  type: text("type").notNull(),
  provider: text("provider").notNull(),
  providerAccountId: text("providerAccountId").notNull(),
  refresh_token: text("refresh_token"),
  refreshTokenExpiresIn: integer("refresh_token_expires_in"),
  access_token: text("access_token"),
  expires_at: integer("expires_at"),
  token_type: text("token_type"),
  scope: text("scope"),
  id_token: text("id_token"),
  session_state: text("session_state"),
  oauth_token_secret: text("oauth_token_secret"),
  oauth_token: text("oauth_token"),
}, (table) => {
  return {
    userIdIdx: index().on(table.userId),
    compositePk: primaryKey({ columns: [table.provider, table.providerAccountId] }),
  };
});

// Define the sites table
export const sites = pgTable("sites", {
  id: text("id").primaryKey().default(createId()),
  name: text("name"),
  description: text("description"),
  logo: text("logo").default("https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/JRajRyC-PhBHEinQkupt02jqfKacBVHLWJq7Iy.png"),
  font: text("font").default("font-cal").notNull(),
  image: text("image").default("https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/hxfcV5V-eInX3jbVUhjAt1suB7zB88uGd1j20b.png"),
  imageBlurhash: text("imageBlurhash").default("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAhCAYAAACbffiEAAAACXBIWXMAABYlAAAWJQFJUiTwAAABfUlEQVR4nN3XyZLDIAwE0Pz/v3q3r55JDlSBplsIEI49h76k4opexCK/juP4eXjOT149f2Tf9ySPgcjCc7kdpBTgDPKByKK2bTPFEdMO0RDrusJ0wLRBGCIuelmWJAjkgPGDSIQEMBDCfA2CEPM80+Qwl0JkNxBimiaYGOTUlXYI60YoehzHJDEm7kxjV3whOQTD3AaCuhGKHoYhyb+CBMwjIAFz647kTqyapdV4enGINuDJMSScPmijSwjCaHeLcT77C7EC0C1ugaCTi2HYfAZANgj6Z9A8xY5eiYghDMNQBJNCWhASot0jGsSCUiHWZcSGQjaWWCDaGMOWnsCcn2QhVkRuxqqNxMSdUSElCDbp1hbNOsa6Ugxh7xXauF4DyM1m5BLtCylBXgaxvPXVwEoOBjeIFVODtW74oj1yBQah3E8tyz3SkpolKS9Geo9YMD1QJR1Go4oJkgO1pgbNZq0AOUPChyjvh7vlXaQa+X1UXwKxgHokB2XPxbX+AnijwIU4ahazAAAAAElFTkSuQmCC"),
  subdomain: text("subdomain").unique(),
  customDomain: text("customDomain").unique(),
  message404: text("message404").default("Blimey! You''ve found a page that doesn''t exist."),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow().notNull(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).notNull().$onUpdate(() => new Date()),
  userId: text("userId").references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" }),
}, (table) => {
  return {
    userIdIdx: index().on(table.userId),
  };
});

// Define relationships
export const userRelations = relations(users, ({ many }) => ({
  posts: many(posts),
  consultations: many(consultations),
  attendance: many(attendance),
}));

export const instructorRelations = relations(instructors, ({ many }) => ({
  consultations: many(consultations),
}));
export const consultationRelations = relations(consultations, ({ one, many }) => ({
  instructor: one(instructors, { references: [instructors.id], fields: [consultations.instructor_id] }),
  attendance: many(attendance),
}));

export const postRelations = relations(posts, ({ one }) => ({
  user: one(users, { references: [users.id], fields: [posts.userId] }),
}));

export const blogRelations = relations(blogs, ({ one }) => ({
  author: one(users, { references: [users.id], fields: [blogs.authorId] }),
}));

export const analyticsRelations = relations(analytics, ({ one }) => ({
  user: one(users, { references: [users.id], fields: [analytics.userId] }),
}));

// Define the user_metrics table
export const userMetrics = pgTable("user_metrics", {
  id: text("id").primaryKey(),
  userId: text("userId").references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" }),
  consultationsAttended: integer("consultationsAttended"),
  postsCreated: integer("postsCreated"),
  commentsMade: integer("commentsMade"),
  lastActive: timestamp("lastActive", { mode: "date" }).notNull(),
});

// Define the userMetricsRelations
export const userMetricsRelations = relations(userMetrics, ({ one }) => ({
  user: one(users, { references: [users.id], fields: [userMetrics.userId] }),
}));

// ... existing code ...