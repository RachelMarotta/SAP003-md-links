const mdLinks = require("../index.js");

describe("mdLinks", () => {

  test("should be a function", (done) => {
    expect(typeof mdLinks).toBe("function");
    done();
  });

  test("return links", (done) => {
    mdLinks("./lib/__tests__/text.md")
      .then(result => {
        expect(result).toEqual([
          { href: "https://pt.wikipedia.org/wiki/Markdown", text: "Markdown" },
          { href: "https://nodejs.org/", text: "Node.js" },
          { href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg", text: "md-links" }
        ]);
        done();
      });
  });

  it("testing error", (done) => {
    mdLinks("./lib/__tests__/tex.md")
      .catch(erro => {
        expect(erro).toEqual("Could not open file: Error: ENOENT: no such file or directory, open 'C:\\Users\\kelma\\Desktop\\SAP003-md-links\\lib\\__tests__\\tex.md'");
        done();
      });
  });
});

