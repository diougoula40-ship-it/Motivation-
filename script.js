// Fonction magique pour envoyer l'image sur le web
async function uploaderImage(file) {
    const formData = new FormData();
    formData.append("image", file);

    // Ici on utilise l'API d'Imgur (gratuit)
    const response = await fetch("https://api.imgur.com/3/image", {
        method: "POST",
        headers: {
            Authorization: "Client-ID TON_ID_ICI" // Il faut s'inscrire pour avoir cet ID
        },
        body: formData
    });

    const data = await response.json();
    return data.data.link; // C'est le lien final de l'image (ex: https://i.imgur.com/abc.jpg)
}
