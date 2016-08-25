class TodosController < ApplicationController
  def index
    @todos = Todo.all
  end

  def create
    @todo = Todo.new(todo_params)
    @todo.checked = false
    if @todo.save
      render json: @todo, status: :ok
    else
      render json: @todos.errors.to_json
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:name)
  end
end
