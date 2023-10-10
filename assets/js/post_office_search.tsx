import { createRoot } from 'react-dom/client';
// @ts-ignore
import AddressSearch from '@18f/identity-address-search';

// @ts-ignore
import { Alert } from '@18f/identity-components';

// @ts-ignore
import { t } from '@18f/identity-i18n';

const elem = document.getElementById('post-office-search')!;
const root = createRoot(elem);
const { addressSearchUrl, locationsSearchUrl } = elem.dataset;

root.render(
  <AddressSearch
    addressSearchURL={addressSearchUrl}
    locationsURL={locationsSearchUrl}
    onFoundLocations={() => {}}
    resultsHeaderComponent={() => (
      <Alert type="info" className="margin-bottom-4">
        <strong>
          {t('in_person_proofing.body.location.po_search.you_must_start.message', {
            app_name: 'Login.gov',
          })}
        </strong>{' '}
        <a href={t('in_person_proofing.body.location.po_search.you_must_start.link')}>
          {t('in_person_proofing.body.location.po_search.you_must_start.link_text')}
        </a>
      </Alert>
    )}
  />,
);