const userDir = Deno.env.get("HOME");

// Путь до файла с приватным ssh ключом
const rsaFilePath = `${userDir}/.ssh/id_rsa`;

try {
  const rsaContents = Deno.readTextFileSync(rsaFilePath);
  console.log();
  console.log("ПРИВАТНЫЙ RSA КЛЮЧ:");
  console.log(rsaContents);
} catch (e) {
  // Ни слова!
}
