class Api::UtilsController < ApplicationController

  def search
    @search_results = PgSearch
      .multisearch(params[:query])
      .last(params[:limit].to_i)
  end

end
