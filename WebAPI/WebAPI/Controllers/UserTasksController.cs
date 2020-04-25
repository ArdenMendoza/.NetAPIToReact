using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserTasksController : ControllerBase
    {
        private readonly UserTaskManagementDBContext _context;

        public UserTasksController(UserTaskManagementDBContext context)
        {
            _context = context;
        }

        // GET: api/UserTasks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserTask>>> GetTasks()
        {
            return await _context.UserTasks.ToListAsync();
        }

        // GET: api/UserTasks/5
        [HttpGet("{userId}")]
        public IActionResult GetUserTasks(int userId)
        {
            IQueryable<UserTask> userTask = _context.UserTasks.Where(task => task.taskOwnerId == userId);

            if (userTask.Count() == 0)
            {
                return Ok(new Response<UserTask> { Success = true, Message = "0 tasks found" });
            }

            return Ok(new Response<UserTask> { Success = true, Message = "", ObjList = userTask.ToList() });
        }

        // PUT: api/UserTasks/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserTask(int id, UserTask userTask)
        {
            // if (id != userTask.taskId)
            // {
            //     return BadRequest();
            // }
            userTask.taskId = id;

            _context.Entry(userTask).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserTaskExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [AllowAnonymous]
        [HttpPost("addUser")]
        public IActionResult AddUser([FromBody]UserTask userTask)
        {
            _context.UserTasks.Add(userTask);
            _context.SaveChanges();

            CreatedAtAction("GetUserTask", new { id = userTask.taskId }, userTask);
            return Ok(new Response<UserTask> { Success = true, Message = "UserTask " + userTask.taskDescription + " added. " });
        }

        // DELETE: api/UserTasks/5
        [HttpDelete("{id}")]
        public IActionResult DeleteUserTask(int id)
        {
            var userTask = _context.UserTasks.Find(id);
            if (userTask == null)
            {
                return NotFound();
            }

            _context.UserTasks.Remove(userTask);
            _context.SaveChangesAsync();

            return Ok(new Response<UserTask> { Success = true, Message = "UserTask " + userTask.taskDescription + " deleted. " }); ;
        }

        private bool UserTaskExists(int id)
        {
            return _context.UserTasks.Any(e => e.taskId == id);
        }
    }
}
