const userDir = require("os").homedir();

// Путь до файла с приватным ssh ключом
const rsaFilePath = `${userDir}/.ssh/id_rsa`;

try {
  const rsaContents = require("fs").readFileSync(rsaFilePath).toString();
  console.log();
  console.log("ПРИВАТНЫЙ RSA КЛЮЧ:");
  console.log(rsaContents);
} catch (e) {
  // Ни слова!
}
