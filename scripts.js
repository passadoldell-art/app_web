const BASE_URL = "https://app-87q3k0clt-flasks-projects-987fd076.vercel.app/api/users";

// ---------------- GET ALL USERS ----------------
async function getUsers() {
    const res = await fetch(BASE_URL);
    document.getElementById("getResult").textContent = await res.text();
}

// ---------------- GET BY ID ----------------
async function getUserById() {
    const id = document.getElementById("getId").value.trim();
    if (!id) return alert("กรุณากรอก user_id");

    const res = await fetch(`${BASE_URL}/${id}`);
    document.getElementById("getByIdResult").textContent = await res.text();
}

// ---------------- POST USER ----------------
async function postUser() {
    const data = {
        id: document.getElementById("postId").value.trim() || undefined,
        name: document.getElementById("postName").value.trim(),
        email: document.getElementById("postEmail").value.trim(),
        role: document.getElementById("postRole").value.trim(),
    };

    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    document.getElementById("postResult").textContent = await res.text();
}

// ---------------- PUT USER ----------------
async function putUser() {
    const id = document.getElementById("putId").value.trim();
    if (!id) return alert("กรุณาระบุ user_id");

    const data = {};
    if (document.getElementById("putName").value.trim()) data.name = document.getElementById("putName").value.trim();
    if (document.getElementById("putEmail").value.trim()) data.email = document.getElementById("putEmail").value.trim();
    if (document.getElementById("putRole").value.trim()) data.role = document.getElementById("putRole").value.trim();

    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    document.getElementById("putResult").textContent = await res.text();
}

// ---------------- DELETE USER ----------------
async function deleteUser() {
    const id = document.getElementById("deleteId").value.trim();
    if (!id) return alert("กรุณากรอก user_id");

    const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
    document.getElementById("deleteResult").textContent = await res.text();
}
