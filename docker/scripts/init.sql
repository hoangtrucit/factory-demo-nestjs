
CREATE TABLE IF NOT EXISTS public."user"
  (
     id    UUID DEFAULT Gen_random_uuid() NOT NULL CONSTRAINT user_pk PRIMARY
     KEY,
     email VARCHAR(255)
  ); 

CREATE TABLE IF NOT EXISTS public.post
  (
     id         UUID DEFAULT Gen_random_uuid() NOT NULL CONSTRAINT post_pk
     PRIMARY KEY,
     title      VARCHAR,
     created_by UUID NOT NULL CONSTRAINT post_user_id_fk REFERENCES
     public."user"
  ); 

CREATE TABLE IF NOT EXISTS public.post_like
  (
     post_id UUID NOT NULL CONSTRAINT post_like_post_id_fk REFERENCES
     public.post,
     user_id UUID NOT NULL CONSTRAINT post_like_user_id_fk REFERENCES
     public."user",
     CONSTRAINT post_like_pk PRIMARY KEY (post_id, user_id)
  ); 

