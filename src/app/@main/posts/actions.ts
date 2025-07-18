"use server";

export async function createPost(formData: FormData) {
  const title = formData.get("title")?.toString().trim();
  const body = formData.get("body")?.toString().trim();

  if (!title || !body) {
    return { success: false, error: "Thiếu tiêu đề hoặc nội dung" };
  }

  console.log("📝 Bài viết:", { title, body });

  return { success: true };
}
