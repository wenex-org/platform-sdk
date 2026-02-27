# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.3.1] - 2026-02-27

### Added

- add: path prefix support @vhidvz

## [1.3.0] - 2026-02-04

### Added

- add: `general/comments` module @vhidvz

## [1.2.X] - 2026-02-02

### Added

- add `thing` services @vhidvz
- add `travels/routing` service @m-hadi-arefi
- add `auth/apts` service @vhidvz
- add `stocks`, `stores`, `products` and `customers` modules to `career` service @vhidvz
- add search method to `conjoint.messages` @vhidvz
- add x-lang header in metadata @fdaei

### Changed

- change `stats.key` type interface @vhidvz
- make `NominatimPlaceAddress.city` optional @vhidvz
- refactor: `Brotli` helper @vhidvz
- path of `RequestConfig` and `ResponseType` from `core/classes` to `core/types` @vhidvz

### Fixed

- fix zone type @winkcor
- fix: `Uncaught (in promise) RuntimeError: unreachable executed` @vhidvz

## [1.1.X] - 2025-10-13

#### --- [ Breaking Changes ] !!!

- name of `identity` property in `context/configs` changed to `eid` @vhidvz
- name of `identity` property in `identity/profiles` changed to `national_code` @vhidvz
- name of `identity` property in `touch/email.smtp` property changed to `message_id` @vhidvz
- replaced `entity` mongo id property from `general/workflows` and replaced with `name` string @vhidvz

### Added

- add `brotli` helper and comparison functionality to compress query string @vhidvz
- add `display_name` field to `Place` type of `logistic.locations` @vhidvz
- `profit` and `discount` to `financial/invoices` in `invoice.items` @vhidvz
- feat: add file sharing @vhidvz
- add `check` post method to `AuthsService` @vhidvz
- `state` field to `financial/invoice` interface @iranmanesh-dev
- feat: enhance `RequestConfig` and `ResponseType` for improved type safety @vhidvz
- feat: new meta keys `x-change-projection-value` and `x-ignore-change-projection` added @vhidvz
- new `Unicode` utility functions for text transformation @iranmanesh-dev
- `range` location field to `career/employees` @vhidvz
- new metadata key `x-file-data` to include file data in requests @iranmanesh-dev
- `code` field to `career/branches` interface @iranmanesh-dev
- `tokenIdentity` utils @fdaei
- default ttl of saga @vhidvz
- optional field `status` added to `context/configs` interface @vhidvz
- optional field `status` added to `context/settings` interface @vhidvz
- `categories` added to `career/business` @iranmanesh-dev
- `career` service @vhidvz
- `name` and `title` as optional field to `logistic/locations` @vhidvz
- `message_time` and `message_size` added to `touch/email.smtp` @vhidvz
- new metadata key `x-exclude-soft-delete-query` to ignore `assignSoftDeleteQuery` functionality @vhidvz
- `publish` and `subscribe` scope @vhidvz
- new `Scope.None` to use in scope hot reload @vhidvz
- `ENV` and `ENV_A` core functions @vhidvz
- `PusHistoryContent` interface and update related enums and interfaces for push notifications @vhidvz
- `message` added to `general/activities` @iranmanesh-dev
- `state` and `title` added to `special/files` @iranmanesh-dev
- `x-can-with-id-policies` header to metadata keys @vhidvz
- `visited` added to `touch/notices` schema @iranmanesh-dev
- `visited` and `icon` added to `touch/notices` @iranmanesh-dev
- `events` module added to `general` micro @vhidvz
- add `cred` functionality to conjoint.accounts service @vhidvz
- conjoint actions, types, and interfaces for accounts, channels, contacts, members, and messages @vhidvz

### Changed

- refactor `brotli` functionality to compress query string in all requests @vhidvz
- remove `buffer` and `base64url` npm package @vhidvz
- make `brotli-wasm` peer dependency optional @vhidvz
- make `name` field optional in `conjoint/channel` @vhidvz
- update `SENSITIVE_PHRASES` to include `/api[_-]key$/` regex @vhidvz
- make `career/employees.profile` optional @vhidvz
- changed upload headers in file service @iranmanesh-dev
- `profile` field added to `career/employees` interface @iranmanesh-dev
- `general/events.organizer` field renamed to `general/events.organizers` @vhidvz
- updated `BusinessType` enum @vhidvz
- removed `status` from `ConfigCQRS` type @vhidvz
- update `context/configs` types @vhidvz
- update `context/configs` key enum @vhidvz
- update `CurrencyProvider` @vhidvz
- `category` changed to `categories` in `career/service` @iranmanesh-dev
- `identity` property moved to core schema as **optional mongo id string** @vhidvz
- auth grants action and object type to include any string value @vhidvz
- `general/notices` moved to `touch/notices` @vhidvz
- refactor path definition of services @vhidvz
- feat: expand Scope enum with additional actions for content, general, and logistic @iranmanesh-dev
- add EVENT type in NoticeType enum @vhidvz
- CI @vhidvz
- rename `collection` prop of essential to `bucket` @vhidvz
- refactor path definition base on collection @vhidvz
- core collection type definition @vhidvz
- refactor essential schema definition @vhidvz

### Fixed

- ensure `account` property is included in `conjoint/channels` interface @vhidvz
- saga response functions @vhidvz
- GraphQL enum names to prefixed with service name @vhidvz
- conjoint undefined service @vhidvz
- optional `icon` property to `NoticeAction` @iranmanesh-dev
- correct spelling of `subtile` to `subtitle` in `touch/notices` @vhidvz
- remove trailing slash from baseURL in cursor method @vhidvz
- correct cursor URL construction in RestfulService @vhidvz
- push history doc type @vhidvz

## [1.0.X] - 2024-01-01

### Added

- initial release 🎉​🎊​.

[unreleased]: https://github.com/wenex-org/platform-sdk/compare/1.3.1...HEAD
[1.3.1]: https://github.com/wenex-org/platform-sdk/compare/1.3.0...1.3.1
[1.3.0]: https://github.com/wenex-org/platform-sdk/compare/1.2.10...1.3.0
[1.2.X]: https://github.com/wenex-org/platform-sdk/compare/1.1.53...1.2.10
[1.1.X]: https://github.com/wenex-org/platform-sdk/compare/1.0.56...1.1.53
[1.0.X]: https://github.com/wenex-org/platform-sdk/releases/tag/1.0.56
