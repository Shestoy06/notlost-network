/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as OnboardingImport } from './routes/onboarding'
import { Route as LayoutImport } from './routes/_layout'
import { Route as IndexImport } from './routes/index'
import { Route as LayoutGraphIndexImport } from './routes/_layout/graph/index'
import { Route as LayoutContactsIndexImport } from './routes/_layout/contacts/index'

// Create/Update Routes

const OnboardingRoute = OnboardingImport.update({
  id: '/onboarding',
  path: '/onboarding',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const LayoutGraphIndexRoute = LayoutGraphIndexImport.update({
  id: '/graph/',
  path: '/graph/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutContactsIndexRoute = LayoutContactsIndexImport.update({
  id: '/contacts/',
  path: '/contacts/',
  getParentRoute: () => LayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/onboarding': {
      id: '/onboarding'
      path: '/onboarding'
      fullPath: '/onboarding'
      preLoaderRoute: typeof OnboardingImport
      parentRoute: typeof rootRoute
    }
    '/_layout/contacts/': {
      id: '/_layout/contacts/'
      path: '/contacts'
      fullPath: '/contacts'
      preLoaderRoute: typeof LayoutContactsIndexImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/graph/': {
      id: '/_layout/graph/'
      path: '/graph'
      fullPath: '/graph'
      preLoaderRoute: typeof LayoutGraphIndexImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

interface LayoutRouteChildren {
  LayoutContactsIndexRoute: typeof LayoutContactsIndexRoute
  LayoutGraphIndexRoute: typeof LayoutGraphIndexRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutContactsIndexRoute: LayoutContactsIndexRoute,
  LayoutGraphIndexRoute: LayoutGraphIndexRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof LayoutRouteWithChildren
  '/onboarding': typeof OnboardingRoute
  '/contacts': typeof LayoutContactsIndexRoute
  '/graph': typeof LayoutGraphIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof LayoutRouteWithChildren
  '/onboarding': typeof OnboardingRoute
  '/contacts': typeof LayoutContactsIndexRoute
  '/graph': typeof LayoutGraphIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/onboarding': typeof OnboardingRoute
  '/_layout/contacts/': typeof LayoutContactsIndexRoute
  '/_layout/graph/': typeof LayoutGraphIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '' | '/onboarding' | '/contacts' | '/graph'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '' | '/onboarding' | '/contacts' | '/graph'
  id:
    | '__root__'
    | '/'
    | '/_layout'
    | '/onboarding'
    | '/_layout/contacts/'
    | '/_layout/graph/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LayoutRoute: typeof LayoutRouteWithChildren
  OnboardingRoute: typeof OnboardingRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LayoutRoute: LayoutRouteWithChildren,
  OnboardingRoute: OnboardingRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_layout",
        "/onboarding"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/contacts/",
        "/_layout/graph/"
      ]
    },
    "/onboarding": {
      "filePath": "onboarding.tsx"
    },
    "/_layout/contacts/": {
      "filePath": "_layout/contacts/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/graph/": {
      "filePath": "_layout/graph/index.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
