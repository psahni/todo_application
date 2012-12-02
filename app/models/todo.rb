class Todo < ActiveRecord::Base
  
  attr_accessible :title, :complete_status, :completed
  attr_accessor :completed
  
  def completed
    !self.completed_at.nil?
  end

  def self.complete(id, attrs)
    Rails.logger.info("comple")
    todo  = find(id)
    todo.attributes = attrs
    todo.completed_at = Time.now
    todo.save
    return todo
  end
  
  def find_all
  end  
end
