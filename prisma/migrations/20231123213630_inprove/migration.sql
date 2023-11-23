-- AlterTable
CREATE SEQUENCE post_personid_seq;
ALTER TABLE "Post" ALTER COLUMN "personid" SET DEFAULT nextval('post_personid_seq');
ALTER SEQUENCE post_personid_seq OWNED BY "Post"."personid";
