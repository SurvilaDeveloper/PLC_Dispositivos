import { useEffect } from 'react'
import { ROUTES } from './navigation'

const SYMBOL_REFERENCE_LINKS: Record<string, string> = {
  'DIP_Switch.html': 'https://en.wikipedia.org/wiki/DIP_switch',
  'solder-bridge.html': 'https://en.wikipedia.org/wiki/Soldering',
  'resistor.html': 'https://en.wikipedia.org/wiki/Resistor',
  'capacitor.html': 'https://en.wikipedia.org/wiki/Capacitor',
  'inductor.html': 'https://en.wikipedia.org/wiki/Inductor',
}

function enhanceLegacyComponentLinks() {
  const enhancedItems = new Map<HTMLElement, () => void>()

  const enhanceItem = (item: HTMLElement) => {
    if (
      item.tagName === 'A' ||
      item.tagName === 'BUTTON' ||
      enhancedItems.has(item)
    ) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Enter' && event.key !== ' ') {
        return
      }

      event.preventDefault()
      item.click()
    }

    item.setAttribute('role', 'link')
    item.tabIndex = 0
    item.addEventListener('keydown', handleKeyDown)

    enhancedItems.set(item, () => {
      item.removeEventListener('keydown', handleKeyDown)
      item.removeAttribute('role')
      item.removeAttribute('tabindex')
    })
  }

  const scan = (root: ParentNode) => {
    if (root instanceof HTMLElement && root.matches('.link-item')) {
      enhanceItem(root)
    }

    root
      .querySelectorAll<HTMLElement>('.link-item')
      .forEach((item) => enhanceItem(item))
  }

  scan(document)

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) {
          scan(node)
        }
      })
    })
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  })

  return () => {
    observer.disconnect()
    enhancedItems.forEach((cleanup) => cleanup())
    enhancedItems.clear()
  }
}

function enhanceLegacySymbolTable() {
  const images = Array.from(document.querySelectorAll<HTMLImageElement>('.dtable img'))

  images.forEach((image) => {
    const source = image.getAttribute('src')

    if (source?.startsWith('./')) {
      image.setAttribute('src', `${import.meta.env.BASE_URL}${source.slice(2)}`)
    }
  })

  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.dtable a[href]'))

  links.forEach((link) => {
    const href = link.getAttribute('href')

    if (!href) {
      return
    }

    const replacement = SYMBOL_REFERENCE_LINKS[href]

    if (replacement) {
      link.href = replacement
      link.target = '_blank'
      link.rel = 'noreferrer'
    }
  })

  const headerCells = document.querySelectorAll<HTMLTableCellElement>(
    '.dtable tbody > tr:first-child > th',
  )

  headerCells.forEach((cell) => cell.setAttribute('scope', 'col'))
}

export function useLegacyAccessibility(path: string) {
  useEffect(() => {
    if (
      path === ROUTES.electronicComponents ||
      path === ROUTES.domesticInstallations
    ) {
      return enhanceLegacyComponentLinks()
    }

    if (path === ROUTES.electronicSymbols) {
      enhanceLegacySymbolTable()
    }
  }, [path])
}
