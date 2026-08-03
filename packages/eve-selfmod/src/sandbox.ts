import { defineSandbox } from "eve/sandbox";
import { justbash } from "eve/sandbox/just-bash";

export default defineSandbox({
  backend: justbash({
    bindMount: {
      access: "read-write",
      source: "agent",
      target: "/source",
    },
  }),
});
