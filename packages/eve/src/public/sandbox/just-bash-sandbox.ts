/**
 * Options accepted by `justbash(opts)`.
 *
 * The just-bash backend runs the workspace under the pure-JS `just-bash`
 * interpreter with a virtual filesystem — no daemon or VM required, but
 * no real binaries either. The `just-bash` package is not bundled with
 * eve; it is loaded lazily from the application install.
 */
export interface JustBashSandboxCreateOptions {
  /**
   * When the `just-bash` package is missing from the application,
   * install it automatically with the project's package manager. Only
   * runs during `eve dev`; production processes always fail with an
   * actionable install error instead. Defaults to `true`.
   */
  readonly autoInstall?: boolean;
  /**
   * Mounts one application directory into the sandbox alongside its
   * session-owned `/workspace`. The source must be relative to the application
   * root and cannot escape it through path traversal or symlinks.
   */
  readonly bindMount?: {
    readonly access: "read-write";
    /** Host directory relative to the application root. */
    readonly source: string;
    /** Absolute mount point inside the sandbox, such as `/source`. */
    readonly target: string;
  };
}
