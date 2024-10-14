-- Create Materialized View
CREATE MATERIALIZED VIEW digest_discover_view AS
SELECT
    'user' AS type,                      -- Column 1
    id,                                  -- Column 2
    name,                                -- Column 3
    username,                            -- Column 4
    image,                               -- Column 5
    NULL AS bio,                         -- Column 6
    NULL AS specialization,              -- Column 7
    NULL AS profile_image,               -- Column 8
    NULL AS caption,                     -- Column 9
    NULL AS media_url,                   -- Column 10
    NULL::timestamp AS timestamp,        -- Column 11
    NULL AS title,                       -- Column 12
    NULL AS description,                 -- Column 13
    NULL::timestamp AS schedule,         -- Column 14
    NULL AS instructor_name,             -- Column 15
    NULL AS instructor_profile_image,    -- Column 16
    NULL AS excerpt,                     -- Column 17
    NULL AS media,                       -- Column 18
    NULL AS author_name,                 -- Column 19
    NULL AS author_profile_image,        -- Column 20
    NULL::timestamp AS created_at        -- Column 21
FROM users

UNION ALL

SELECT
    'instructor' AS type,                -- Column 1
    id,                                  -- Column 2
    name,                                -- Column 3
    NULL AS username,                    -- Column 4
    NULL AS image,                       -- Column 5
    bio,                                 -- Column 6
    specialization,                      -- Column 7
    profile_image,                       -- Column 8
    NULL AS caption,                     -- Column 9
    NULL AS media_url,                   -- Column 10
    NULL::timestamp AS timestamp,        -- Column 11
    NULL AS title,                       -- Column 12
    NULL AS description,                 -- Column 13
    NULL::timestamp AS schedule,         -- Column 14
    NULL AS instructor_name,             -- Column 15
    NULL AS instructor_profile_image,    -- Column 16
    NULL AS excerpt,                     -- Column 17
    NULL AS media,                       -- Column 18
    NULL AS author_name,                 -- Column 19
    NULL AS author_profile_image,        -- Column 20
    NULL::timestamp AS created_at        -- Column 21
FROM instructors

UNION ALL

SELECT
    'instagram' AS type,                 -- Column 1
    id,                                  -- Column 2
    NULL AS name,                        -- Column 3
    username,                            -- Column 4
    NULL AS image,                       -- Column 5
    NULL AS bio,                         -- Column 6
    NULL AS specialization,              -- Column 7
    NULL AS profile_image,               -- Column 8
    caption,                             -- Column 9
    media_url,                           -- Column 10
    timestamp,                           -- Column 11
    NULL AS title,                       -- Column 12
    NULL AS description,                 -- Column 13
    NULL::timestamp AS schedule,         -- Column 14
    NULL AS instructor_name,             -- Column 15
    NULL AS instructor_profile_image,    -- Column 16
    NULL AS excerpt,                     -- Column 17
    NULL AS media,                       -- Column 18
    NULL AS author_name,                 -- Column 19
    NULL AS author_profile_image,        -- Column 20
    NULL::timestamp AS created_at        -- Column 21
FROM instagram_posts

UNION ALL

SELECT
    'consultation' AS type,              -- Column 1
    c.id,                                -- Column 2
    NULL AS name,                        -- Column 3
    NULL AS username,                    -- Column 4
    NULL AS image,                       -- Column 5
    NULL AS bio,                         -- Column 6
    NULL AS specialization,              -- Column 7
    NULL AS profile_image,               -- Column 8
    NULL AS caption,                     -- Column 9
    NULL AS media_url,                   -- Column 10
    NULL::timestamp AS timestamp,        -- Column 11
    c.title,                             -- Column 12
    c.description,                       -- Column 13
    c.schedule,                          -- Column 14
    i.name AS instructor_name,           -- Column 15
    i.profile_image AS instructor_profile_image, -- Column 16
    NULL AS excerpt,                     -- Column 17
    NULL AS media,                       -- Column 18
    NULL AS author_name,                 -- Column 19
    NULL AS author_profile_image,        -- Column 20
    NULL::timestamp AS created_at        -- Column 21
FROM consultations c
LEFT JOIN instructors i ON c.instructor_id = i.id

UNION ALL

SELECT
    'blog' AS type,                      -- Column 1
    b.id,                                -- Column 2
    NULL AS name,                        -- Column 3
    NULL AS username,                    -- Column 4
    NULL AS image,                       -- Column 5
    NULL AS bio,                         -- Column 6
    NULL AS specialization,              -- Column 7
    NULL AS profile_image,               -- Column 8
    NULL AS caption,                     -- Column 9
    NULL AS media_url,                   -- Column 10
    NULL::timestamp AS timestamp,        -- Column 11
    b.title,                             -- Column 12
    NULL AS description,                 -- Column 13
    NULL::timestamp AS schedule,         -- Column 14
    NULL AS instructor_name,             -- Column 15
    NULL AS instructor_profile_image,    -- Column 16
    b.excerpt,                           -- Column 17
    NULL AS media,                       -- Column 18
    u.name AS author_name,               -- Column 19
    u.image AS author_profile_image,     -- Column 20
    b."createdAt"                        -- Column 21
FROM blogs b
LEFT JOIN users u ON b."authorId" = u.id;

-- <--- Added semicolon here to terminate the CREATE MATERIALIZED VIEW statement

-- Create Index for text search
CREATE INDEX idx_digest_discover_search
ON digest_discover_view
USING gin(to_tsvector('english',
    coalesce(name, '') || ' ' ||
    coalesce(username, '') || ' ' ||
    coalesce(bio, '') || ' ' ||
    coalesce(title, '') || ' ' ||
    coalesce(description, '') || ' ' ||
    coalesce(excerpt, '')
));