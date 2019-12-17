require 'test_helper'

class Api::TicketsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_tickets_index_url
    assert_response :success
  end

  test "should get show" do
    get api_tickets_show_url
    assert_response :success
  end

  test "should get new" do
    get api_tickets_new_url
    assert_response :success
  end

  test "should get edit" do
    get api_tickets_edit_url
    assert_response :success
  end

  test "should get update" do
    get api_tickets_update_url
    assert_response :success
  end

end
