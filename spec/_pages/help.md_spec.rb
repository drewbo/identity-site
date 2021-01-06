require 'spec_helper'

RSpec.describe 'help.md' do
  let(:doc) { Nokogiri::HTML(file_at('/help')) }

  it 'opens external links in a new window' do
    expect(doc).to open_external_links_in_new_window
  end

  it 'escapes html correctly' do
    expect(doc).to properly_escape_html
  end

  it 'links to valid headings' do
    expect(doc).to link_to_valid_headers
  end

  it 'links to valid internal pages' do
    expect(doc).to link_to_valid_internal_pages
  end

  it 'has valid links' do
    expect(doc).to link_to_valid_urls
  end

  describe '/help/creating-an-account/how-to-create-an-account' do
    let(:doc) { Nokogiri::HTML(file_at('/help/creating-an-account/how-to-create-an-account')) }

    it 'links to valid internal pages' do
      expect(doc).to link_to_valid_internal_pages
    end
  end
end