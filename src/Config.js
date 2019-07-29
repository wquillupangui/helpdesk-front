const prod = {
  url: {
    API_URL: "http://localhost:8080"
  }
};

const dev = {
  url: {
    API_URL: "http://localhost:8080"
  }
};

export const conf = process.env.NODE_ENV === "development" ? dev : prod;
