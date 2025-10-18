/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Execution Source - Specify how the `uni` utility is executed. */
  "execSource": "wasm" | "bundled" | "path" | "custom",
  /** Executable Path - Path to the `uni` executable when 'Custom Path' is selected as execution source. */
  "execPath": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-unicode` command */
  export type SearchUnicode = ExtensionPreferences & {}
  /** Preferences accessible in the `identify-unicode` command */
  export type IdentifyUnicode = ExtensionPreferences & {
  /** Show Encodings - Show character encodings (UTF-8, UTF-16, etc.) in the results. */
  "showEncodings": boolean
}
}

declare namespace Arguments {
  /** Arguments passed to the `search-unicode` command */
  export type SearchUnicode = {}
  /** Arguments passed to the `identify-unicode` command */
  export type IdentifyUnicode = {}
}

