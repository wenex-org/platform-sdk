# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.23] - 2025-07-24

### Added

- `name` and `title` as optional field to `logistic/locations` @vhidvz
- `message_time` and `message_size` added to `touch/email.smtp` @vhidvz

### Fixed

- GraphQL enum names to prefixed with service name @vhidvz

### Changed

- `identity` property moved to core schema as **optional mongo id string** @vhidvz

#### --- [ Breaking Changes ] !!!

- name of `identity` property in `context/configs` changed to `eid` @vhidvz
- name of `identity` property in `identity/profiles` changed to `national_code` @vhidvz
- name of `identity` property in `touch/email.smtp` property changed to `message_id` @vhidvz
- replaced `entity` mongo id property from `general/workflows` and replaced with `name` string @vhidvz

## [1.1.22] - 2025-07-23

### Fixed

- conjoint undefined service @vhidvz

## [1.1.21] - 2025-07-19

### Added

- new metadata key `x-exclude-soft-delete-query` to ignore `assignSoftDeleteQuery` functionality @vhidvz

### Changed

- auth grants action and object type to include any string value @vhidvz

## [1.1.20] - 2025-07-17

### Added

- `publish` and `subscribe` scope @vhidvz

## [1.1.19] - 2025-07-17

### Added

- new `Scope.None` to use in scope hot reload @vhidvz

## [1.1.18] - 2025-07-16

### Added

- `ENV` and `ENV_A` core functions @vhidvz

## [1.1.17] - 2025-07-14

### Added

- `PusHistoryContent` interface and update related enums and interfaces for push notifications @vhidvz

## [1.1.16] - 2025-07-13

### Fixed

- optional `icon` property to `NoticeAction` @iranmanesh-dev
- correct spelling of `subtile` to `subtitle` in `touch/notices` @vhidvz

## [1.1.15] - 2025-07-12

### Added

- `message` added to `general/activities` @iranmanesh-dev
- `state` and `title` added to `special/files` @iranmanesh-dev

## [1.1.14] - 2025-07-08

### Added

- `x-can-with-id-policies` header to metadata keys @vhidvz
- `visited` added to `touch/notices` schema @iranmanesh-dev

## [1.1.13] - 2025-07-07

### Added

- `visited` and `icon` added to `touch/notices` @iranmanesh-dev

## [1.1.12] - 2025-07-07

### Added

- `events` module added to `general` micro @vhidvz

### Changed

- `general/notices` moved to `touch/notices` @vhidvz

## [1.1.11] - 2025-06-21

### Added

- add `cred` functionality to conjoint.accounts service @vhidvz

## [1.1.10] - 2025-06-18

### Changed

- refactor path definition of services @vhidvz

## [1.1.9] - 2025-06-18

### Added

- conjoint actions, types, and interfaces for accounts, channels, contacts, members, and messages @vhidvz

## [1.1.8] - 2025-06-11

### Changed

- feat: expand Scope enum with additional actions for content, general, and logistic @iranmanesh-dev

## [1.1.7] - 2025-06-11

### Changed

- add EVENT type in NoticeType enum @vhidvz

## [1.1.6] - 2025-06-10

### Fixed

- remove trailing slash from baseURL in cursor method @vhidvz

## [1.1.5] - 2025-06-10

### Fixed

- correct cursor URL construction in RestfulService @vhidvz

## [1.1.4] - 2025-06-09

### Changed

- CI @vhidvz

## [1.1.3] - 2025-06-02

### Fixed

- push history doc type @vhidvz

## [1.1.2] - 2025-06-01

### Changed

- rename `collection` prop of essential to `bucket` @vhidvz

## [1.1.1] - 2025-06-01

### Changed

- refactor path definition base on collection @vhidvz

## [1.1.0] - 2025-06-01

### Changed

- core collection type definition @vhidvz
- refactor essential schema definition @vhidvz

## [1.0.X] - 2024-01-01

### Added

- initial release 🎉​🎊​.

[unreleased]: https://github.com/wenex-org/platform-sdk/compare/1.1.23...HEAD
[1.1.23]: https://github.com/wenex-org/platform-sdk/compare/1.1.22...1.1.23
[1.1.22]: https://github.com/wenex-org/platform-sdk/compare/1.1.21...1.1.22
[1.1.21]: https://github.com/wenex-org/platform-sdk/compare/1.1.20...1.1.21
[1.1.20]: https://github.com/wenex-org/platform-sdk/compare/1.1.19...1.1.20
[1.1.19]: https://github.com/wenex-org/platform-sdk/compare/1.1.18...1.1.19
[1.1.18]: https://github.com/wenex-org/platform-sdk/compare/1.1.17...1.1.18
[1.1.17]: https://github.com/wenex-org/platform-sdk/compare/1.1.16...1.1.17
[1.1.16]: https://github.com/wenex-org/platform-sdk/compare/1.1.15...1.1.16
[1.1.15]: https://github.com/wenex-org/platform-sdk/compare/1.1.14...1.1.15
[1.1.14]: https://github.com/wenex-org/platform-sdk/compare/1.1.13...1.1.14
[1.1.13]: https://github.com/wenex-org/platform-sdk/compare/1.1.12...1.1.13
[1.1.12]: https://github.com/wenex-org/platform-sdk/compare/1.1.11...1.1.12
[1.1.11]: https://github.com/wenex-org/platform-sdk/compare/1.1.10...1.1.11
[1.1.10]: https://github.com/wenex-org/platform-sdk/compare/1.1.9...1.1.10
[1.1.9]: https://github.com/wenex-org/platform-sdk/compare/1.1.8...1.1.9
[1.1.8]: https://github.com/wenex-org/platform-sdk/compare/1.1.7...1.1.8
[1.1.7]: https://github.com/wenex-org/platform-sdk/compare/1.1.6...1.1.7
[1.1.6]: https://github.com/wenex-org/platform-sdk/compare/1.1.5...1.1.6
[1.1.5]: https://github.com/wenex-org/platform-sdk/compare/1.1.4...1.1.5
[1.1.4]: https://github.com/wenex-org/platform-sdk/compare/1.1.3...1.1.4
[1.1.3]: https://github.com/wenex-org/platform-sdk/compare/1.1.2...1.1.3
[1.1.2]: https://github.com/wenex-org/platform-sdk/compare/1.1.1...1.1.2
[1.1.1]: https://github.com/wenex-org/platform-sdk/compare/1.1.0...1.1.1
[1.1.0]: https://github.com/wenex-org/platform-sdk/compare/1.0.56...1.1.0
[1.0.X]: https://github.com/wenex-org/platform-sdk/releases/tag/1.0.56
