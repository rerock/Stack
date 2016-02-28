module ApplicationHelper
  def auth_token
    <<-wen.html_safe
    <input type="hidden"
      name="authenticity_token"
      value="#{form_authenticity_token}">
    wen
  end
end
