namespace :db do
  desc "Create Todo Records"
  task :insert_todos => :environment do
    ["Read Gita", "Do Some Coding", "Eat Food" ].each do |todo_title|
      todo = Todo.new
      todo.title = todo_title
      todo.completed_at = DateTime.now - rand(5).send(:days)
      if todo.save
        puts "==> #{ todo_title }"
      end
    end
  end
  
end

