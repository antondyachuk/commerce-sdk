"use strict";

import { assert, expect } from "chai";
const generator = require("../src/utils/parser");

describe("Test RAML file", () => {
  it("Test invalid RAML file", () => {
    let ramlFile = `${__dirname}/raml/invalid/search-invalid.raml`;
    return generator
      .processRamlFile(ramlFile)
      .then(res => {
        throw Error("Valid Invalid RAML file parsing to fail", res);
      })
      .catch(err => {
        expect(err).to.not.equal(null);
      });
  });

  it("Test valid RAML file", () => {
    let ramlFile = `${__dirname}/raml/valid/site.raml`;
    return generator
      .processRamlFile(ramlFile)
      .then(res => {
        expect(res).to.not.equal(null);
        assert(true);
      })
      .catch(err => {
        throw Error("Valid RAML file parsing should not fail", err);
      });
  });
});