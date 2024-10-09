import { createId } from "@paralleldrive/cuid2";
import { relations } from "drizzle-orm";
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
  emailVerified: timestamp("emailVerified", { mode: "date" }).notNull(),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow().notNull(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).notNull().$onUpdate(() => new Date()),
  isDummy: boolean("isDummy"),
  provider: text("provider"),
  providerId: text("providerId"),
  image: text("image"),
  accessToken: text("accessToken"),
  role: text("role"),
});

// Define the instructors table
export const instructors = pgTable("instructors", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow().notNull(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).notNull().$onUpdate(() => new Date()),
  isDummy: boolean("isDummy"),
  profileImage: text("profileImage"),
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
  endDate: timestamp("endDate", { mode: "date" }),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow().notNull(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).notNull().$onUpdate(() => new Date()),
  isDummy: boolean("isDummy"),
  sessions: integer("sessions"),
  packageType: text("packageType"),
  instructorId: text("instructorId").references(() => instructors.id, { onDelete: "cascade", onUpdate: "cascade" }),
  availableDates: text("availableDates").array(),
  recurrencePattern: text("recurrencePattern"),
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
  content: text("content"),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow().notNull(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).notNull().$onUpdate(() => new Date()),
  isDummy: boolean("isDummy"),
  userId: text("userId").references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" }),
  categories: text("categories"),
  media: text("media"),
  videoUrl: text("videoUrl"),
  tags: text("tags"),
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
  id: integer("id").primaryKey(),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow().notNull(),
  isDummy: boolean("isDummy"),
  userId: text("userId").references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" }),
  action: text("action").notNull(),
  metadata: text("metadata"),
});

// Define the user_metrics table
export const userMetrics = pgTable("user_metrics", {
  id: text("id").primaryKey(),
  consultationsAttended: integer("consultationsAttended"),
  postsCreated: integer("postsCreated"),
  commentsMade: integer("commentsMade"),
  lastActive: timestamp("lastActive", { mode: "date" }).notNull(),
  userId: text("userId").references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" }),
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
  instructor: one(instructors, { references: [instructors.id], fields: [consultations.instructorId] }),
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

export const userMetricsRelations = relations(userMetrics, ({ one }) => ({
  user: one(users, { references: [users.id], fields: [userMetrics.userId] }),
}));