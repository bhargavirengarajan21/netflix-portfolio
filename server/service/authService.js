import admin from "firebase-admin";
import dotenv from "dotenv";
dotenv.config({ path: "./deployment/.env" });
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "bhargavi-7c12f",
    clientEmail: "firebase-adminsdk-wcj4p@bhargavi-7c12f.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDyhWvDUW1dp28A\nNweOdpFV67OPGkbOCZri5m/4ZesrSGEXSUMEniJEQgDSbq2FslQNwaePCOIMhXa6\nepgEnpFQA2x+AQOeSizZtNqe5Yun+AZy+PcpjMBFI7PWGhZ1asmxE/g/fjJ1ICIU\nkQIzeXu66p7DrmXMQTU5GnayaMHBVbB8fvnWWbr8/qwAcPejSEYqHFqaekx81odY\nRT2lJqU0UcUwGhqTDkAZjW1xOObjwLUFmuBedLpVOW2+XH16TGyl1UURXcLXN71k\ncmfUvTZ1KP5u6YjMYIRV6OpQKLayokPmEy5I59XR9yQwrgc9X+Bgq19gAAlO6y58\nHVG/RhWVAgMBAAECggEAKr/WgFIq6VKRiDPrDtN7KG5ZEy1SVFDQntT4YUyT4OgM\nB0cIe3ileSs6Sl2slC/cTaV4dAfgksz24gWopM3Ptw83cVmb6evQzppo3BAB51ya\nxGr65HXVUYqq0V99XHqzrVVkEcscuVUt9Lqf7PNp2kevrzYfZxsKdvOhfy7kkn/A\nuDKckQVVEajsLJ4+B4LaTRKVg+k99OgG4H1d6QvcemaPJDnbAxSevsBLnHdoh+8N\njGVhQBuQlmOf1KCdxUtenD2h5HSi4DH9vq7zqqDsJdpq6sxhpQqMXMigvZysQZzI\n3/f8c8LsqwI3iARVPAjqc2ZE6pRIpCT05Ix8R3ZqIQKBgQD784nyUxdgmZC6Zrj8\neUqh+50nUAK81JTAkJWSpYh2Zma4KJhSyT2Vnx9fB+IpZBSBF2/4jixMjqEOxDS/\nd4dQ2YPP/CK6702Vh8Lc5KIftlU9qp98rgZGYa/d8WznoiEM7H4fWjG9NheAoJey\nOLb660rAAmxYcr2zFbucw0xIoQKBgQD2axbGARkZk1hzuWMukIMPlpG2lxBFGf//\nr+AOk8Tzl5M0/SiAukLiJcFD6r+TF9mv4QGLu5bjXquZ5qwNR5/D5yBrYV9SaYV+\nkMFJCCAfyUTJPmhMGMOMocVCxJsdSgVF6pajlUJIdEago1eG/3W5JdQdSeIWtbpC\nYx8MIspkdQKBgQDcY4EkXniRgGLwGpDwEG0vWjhyvfNXGCDyfMbJm1DOOO7bYm8z\n42KicalwaCX2DNw+u7CvXDX11cGeeBSn8zeDinFZynTazh8wkKvsq3YBhW303j5a\nQqOshyDeZKPdzp1Yf7onVK8zkpBmbJOlSyUMQiuF39jEWcIEWBtfmhotYQKBgDRn\nJ6up9h2DQS8zAI2Ze9WnzosG6xXW5qMIUtymvh6TYGHHaIKfmbOgFc6MsHrmeou1\njO+bUAZATrvm2zXjwm0VzMYpKe1LtXDp9cDDMpmv4qntVJ7CMWvJxzpgtx/uatqo\nfaqCBluEJrTop6d00iMykT49RRBRSy/tBmA9Uc81AoGBAI5ronfbzJ5g9bdtC3vO\nMqejKM6xfJyYfsEIG1mwduzDXNWlpCPJutpo8Ag0mS+fncAWL5yB03UieTf5VbEK\nL3gXWtHJyjLMmxwXsJUmw1l3RDKV3B3DDxgdT7KwTERJ/O4mLR2ZVDB/Z0rycvgK\n1hzdaenKvNIR8tT69CSUldvx\n-----END PRIVATE KEY-----\n",
  }),
});

const verifyIdToken = async (idToken) => {
  return await admin.auth().verifyIdToken(idToken);
};

export {
  verifyIdToken
};