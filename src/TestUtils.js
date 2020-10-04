import React from 'react'
import { IntlContextProvider, IntlProvider } from 'gatsby-plugin-intl'

export const renderWithProviders = component => (
  <IntlContextProvider value={{ language: 'en-US', routed: true }}>
    <IntlProvider locale="en">{component}</IntlProvider>
  </IntlContextProvider>
)
