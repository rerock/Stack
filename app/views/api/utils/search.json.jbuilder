json.total_count @search_results.length

searchable_ids = @search_results.map{ |search_result| search_result.searchable_id}
json.results Message.where( id:searchable_ids )
