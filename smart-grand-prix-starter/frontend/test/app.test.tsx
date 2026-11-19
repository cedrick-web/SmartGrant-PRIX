import assert from "node:assert/strict";
import { test } from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import App from "../src/App.js";

test("landing page presents the three MVP platform areas", () => {
  const markup = renderToStaticMarkup(createElement(App));

  assert.match(markup, /Connecting Rwanda’s motorsport ecosystem/);
  assert.match(markup, /Business Directory/);
  assert.match(markup, /Motorsport Intelligence/);
  assert.match(markup, /Talent &amp; Opportunities/);
});
